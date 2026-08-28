import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";
import {
  liveCategories,
  vodCategories,
  seriesCategories,
  liveStreams,
  vodStreams,
  seriesList,
  episodesBySeriesId,
  epgPrograms,
} from "./catalog.mjs";

const PORT = Number(process.env.PORT || 8080);
const POSTERS_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "posters");
const POSTER_PATH = /^\/posters\/([a-z0-9-]+\.(?:jpg|jpeg|png))$/i;
const USERNAME = process.env.XTREAM_USER || "screenshot";
const PASSWORD = process.env.XTREAM_PASS || "demo";
const PUBLIC_URL = (process.env.PUBLIC_URL || `http://127.0.0.1:${PORT}`).replace(/\/$/, "");

const liveById = new Map(liveStreams.map((item) => [String(item.stream_id), item]));
const vodById = new Map(vodStreams.map((item) => [String(item.stream_id), item]));
const seriesById = new Map(seriesList.map((item) => [String(item.series_id), item]));
const episodeById = new Map();
for (const seasons of Object.values(episodesBySeriesId)) {
  for (const episodes of Object.values(seasons)) {
    for (const episode of episodes) {
      episodeById.set(String(episode.id), episode);
    }
  }
}

const STREAM_PATH = /^\/(live|movie|series)\/([^/]+)\/([^/]+)\/(\d+)(?:\.([A-Za-z0-9]+))?$/;

function parseQuery(request, url) {
  const query = Object.fromEntries(url.searchParams.entries());
  if (request.method !== "POST") return Promise.resolve(query);

  return new Promise((resolve) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      const params = new URLSearchParams(raw);
      for (const [key, value] of params.entries()) {
        query[key] = value;
      }
      resolve(query);
    });
    request.on("error", () => resolve(query));
  });
}

function send(response, status, body, contentType = "application/json; charset=utf-8") {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  response.writeHead(status, {
    "content-type": contentType,
    "content-length": Buffer.byteLength(payload),
    "access-control-allow-origin": "*",
    "cache-control": "no-store",
  });
  response.end(payload);
}

function unauthorized() {
  return {
    user_info: {
      auth: 0,
      status: "Disabled",
      message: "Invalid credentials",
    },
    server_info: serverInfo(),
  };
}

function isAuthed(query) {
  return query.username === USERNAME && query.password === PASSWORD;
}

function serverInfo() {
  const now = new Date();
  const parsed = new URL(PUBLIC_URL);
  const https = parsed.protocol === "https:";
  return {
    url: parsed.hostname,
    port: parsed.port || (https ? "443" : "80"),
    https_port: https ? parsed.port || "443" : "443",
    server_protocol: https ? "https" : "http",
    rtmp_port: "0",
    timezone: "UTC",
    timestamp_now: Math.floor(now.getTime() / 1000),
    time_now: now.toISOString().replace("T", " ").slice(0, 19),
  };
}

function userInfo() {
  return {
    user_info: {
      username: USERNAME,
      password: PASSWORD,
      message: "IPTVio App Store screenshot demo",
      auth: 1,
      status: "Active",
      exp_date: "2147483647",
      is_trial: "0",
      active_cons: "0",
      created_at: "1704067200",
      max_connections: "3",
      allowed_output_formats: ["ts", "m3u8", "mp4"],
    },
    server_info: serverInfo(),
  };
}

function slotStart(now, offsetHours) {
  const start = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    0, 0, 0, 0,
  ));
  start.setUTCHours(start.getUTCHours() + offsetHours);
  return start;
}

function programsForChannel(channel, days = 2) {
  const now = new Date();
  const total = days * 24;
  const programs = [];
  for (let hour = 0; hour < total; hour += 1) {
    const start = slotStart(now, hour);
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const title = epgPrograms[(hour + channel.num) % epgPrograms.length];
    programs.push({
      id: `${channel.stream_id}-${hour}`,
      start,
      end,
      title,
      description: `${title} on ${channel.name}. Original demo programming for App Store screenshots.`,
    });
  }
  return programs;
}

function formatXmltvDate(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())} +0000`;
}

function formatSqlDate(date) {
  return date.toISOString().replace("T", " ").slice(0, 19);
}

function toListing(channel, program) {
  return {
    id: program.id,
    epg_id: channel.epg_channel_id,
    title: program.title,
    lang: "en",
    start: formatSqlDate(program.start),
    end: formatSqlDate(program.end),
    description: program.description,
    channel_id: channel.epg_channel_id,
    start_timestamp: String(Math.floor(program.start.getTime() / 1000)),
    stop_timestamp: String(Math.floor(program.end.getTime() / 1000)),
    now_playing: program.start <= new Date() && program.end > new Date() ? 1 : 0,
    has_archive: 0,
  };
}

function buildXmltv() {
  const lines = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<tv generator-info-name="IPTVio Screenshot Demo">`,
  ];
  for (const channel of liveStreams) {
    lines.push(`  <channel id="${escapeXml(channel.epg_channel_id)}">`);
    lines.push(`    <display-name>${escapeXml(channel.name)}</display-name>`);
    lines.push(`    <icon src="${escapeXml(channel.stream_icon)}" />`);
    lines.push(`  </channel>`);
  }
  for (const channel of liveStreams) {
    for (const program of programsForChannel(channel)) {
      lines.push(`  <programme start="${formatXmltvDate(program.start)}" stop="${formatXmltvDate(program.end)}" channel="${escapeXml(channel.epg_channel_id)}">`);
      lines.push(`    <title>${escapeXml(program.title)}</title>`);
      lines.push(`    <desc>${escapeXml(program.description)}</desc>`);
      lines.push(`  </programme>`);
    }
  }
  lines.push(`</tv>`);
  return `${lines.join("\n")}\n`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildM3u(output = "ts") {
  const lines = ["#EXTM3U"];
  for (const channel of liveStreams) {
    lines.push(`#EXTINF:-1 tvg-id="${channel.epg_channel_id}" tvg-name="${channel.name}" tvg-logo="${channel.stream_icon}" group-title="${categoryName(liveCategories, channel.category_id)}",${channel.name}`);
    lines.push(`${PUBLIC_URL}/live/${USERNAME}/${PASSWORD}/${channel.stream_id}.${output}`);
  }
  for (const movie of vodStreams) {
    lines.push(`#EXTINF:-1 tvg-id="" tvg-name="${movie.name}" tvg-logo="${movie.stream_icon}" group-title="${categoryName(vodCategories, movie.category_id)}" plot="${movie.info.plot}",${movie.name}`);
    lines.push(`${PUBLIC_URL}/movie/${USERNAME}/${PASSWORD}/${movie.stream_id}.${movie.container_extension}`);
  }
  for (const show of seriesList) {
    const seasons = episodesBySeriesId[show.series_id] || {};
    for (const episodes of Object.values(seasons)) {
      for (const episode of episodes) {
        lines.push(`#EXTINF:-1 tvg-id="" tvg-name="${show.name} ${episode.title}" tvg-logo="${show.cover}" group-title="${categoryName(seriesCategories, show.category_id)}" plot="${show.plot}",${show.name} ${episode.title}`);
        lines.push(`${PUBLIC_URL}/series/${USERNAME}/${PASSWORD}/${episode.id}.${episode.container_extension}`);
      }
    }
  }
  return `${lines.join("\n")}\n`;
}

function categoryName(categories, id) {
  return categories.find((item) => item.category_id === String(id))?.category_name || "Other";
}

function handlePlayerApi(query) {
  if (!isAuthed(query)) return { status: 200, body: unauthorized() };

  switch (query.action || "") {
    case "":
      return { status: 200, body: userInfo() };
    case "get_live_categories":
      return { status: 200, body: liveCategories };
    case "get_vod_categories":
      return { status: 200, body: vodCategories };
    case "get_series_categories":
      return { status: 200, body: seriesCategories };
    case "get_live_streams":
      return {
        status: 200,
        body: query.category_id
          ? liveStreams.filter((item) => item.category_id === String(query.category_id))
          : liveStreams,
      };
    case "get_vod_streams":
      return {
        status: 200,
        body: query.category_id
          ? vodStreams.filter((item) => item.category_id === String(query.category_id))
          : vodStreams,
      };
    case "get_series":
      return {
        status: 200,
        body: query.category_id
          ? seriesList.filter((item) => item.category_id === String(query.category_id))
          : seriesList,
      };
    case "get_vod_info": {
      const movie = vodById.get(String(query.vod_id));
      if (!movie) return { status: 200, body: {} };
      return {
        status: 200,
        body: {
          info: movie.info,
          movie_data: {
            stream_id: movie.stream_id,
            name: movie.name,
            added: movie.added,
            category_id: movie.category_id,
            container_extension: movie.container_extension,
          },
        },
      };
    }
    case "get_series_info": {
      const show = seriesById.get(String(query.series_id));
      if (!show) return { status: 200, body: {} };
      const seasons = episodesBySeriesId[show.series_id] || {};
      return {
        status: 200,
        body: {
          seasons: Object.keys(seasons).map((seasonNumber) => ({
            season_number: seasonNumber,
            name: `Season ${seasonNumber}`,
            cover: show.cover,
            episode_count: seasons[seasonNumber].length,
          })),
          info: {
            name: show.name,
            cover: show.cover,
            plot: show.plot,
            cast: show.cast,
            director: show.director,
            genre: show.genre,
            releaseDate: show.releaseDate,
            release_date: show.release_date,
            rating: show.rating,
            backdrop_path: show.backdrop_path,
          },
          episodes: Object.fromEntries(
            Object.entries(seasons).map(([seasonNumber, episodes]) => [
              seasonNumber,
              episodes.map(({ source_url, ...episode }) => episode),
            ]),
          ),
        },
      };
    }
    case "get_short_epg": {
      const channel = liveById.get(String(query.stream_id));
      if (!channel) return { status: 200, body: { epg_listings: [] } };
      const limit = Math.max(1, Number(query.limit || 4));
      const now = new Date();
      const listings = programsForChannel(channel)
        .filter((program) => program.end > now)
        .slice(0, limit)
        .map((program) => toListing(channel, program));
      return { status: 200, body: { epg_listings: listings } };
    }
    case "get_simple_data_table": {
      if (query.stream_id) {
        const channel = liveById.get(String(query.stream_id));
        if (!channel) return { status: 200, body: { epg_listings: [] } };
        return {
          status: 200,
          body: { epg_listings: programsForChannel(channel).map((program) => toListing(channel, program)) },
        };
      }
      const epg_listings = {};
      for (const channel of liveStreams) {
        epg_listings[String(channel.stream_id)] = programsForChannel(channel).map((program) => toListing(channel, program));
      }
      return { status: 200, body: { epg_listings } };
    }
    default:
      return { status: 200, body: [] };
  }
}

function resolveSource(kind, id, extension) {
  if (kind === "live") {
    const channel = liveById.get(id);
    if (!channel) return null;
    if (extension === "m3u8" && channel.hls_url) return channel.hls_url;
    return channel.source_url;
  }
  if (kind === "movie") return vodById.get(id)?.source_url;
  return episodeById.get(id)?.source_url;
}

function redirectToSource(response, sourceUrl) {
  response.writeHead(302, {
    location: sourceUrl,
    "access-control-allow-origin": "*",
    "cache-control": "no-store",
  });
  response.end();
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, PUBLIC_URL);

    if (request.method === "OPTIONS") {
      response.writeHead(204, {
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET,POST,OPTIONS",
        "access-control-allow-headers": "*",
      });
      response.end();
      return;
    }

    const posterMatch = url.pathname.match(POSTER_PATH);
    if (posterMatch) {
      const filePath = path.join(POSTERS_DIR, posterMatch[1]);
      if (!fs.existsSync(filePath)) {
        send(response, 404, { error: "poster not found" });
        return;
      }
      const body = fs.readFileSync(filePath);
      response.writeHead(200, {
        "content-type": filePath.endsWith(".png") ? "image/png" : "image/jpeg",
        "content-length": body.length,
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=86400",
      });
      response.end(body);
      return;
    }

    if (url.pathname === "/" || url.pathname === "/health") {
      send(response, 200, {
        ok: true,
        service: "iptvio-screenshot-xtream",
        public_url: PUBLIC_URL,
        username: USERNAME,
      });
      return;
    }

    if (url.pathname === "/player_api.php" || url.pathname === "/player_api") {
      const query = await parseQuery(request, url);
      const result = handlePlayerApi(query);
      send(response, result.status, result.body);
      return;
    }

    if (url.pathname === "/xmltv.php" || url.pathname === "/xmltv") {
      const query = await parseQuery(request, url);
      if (!isAuthed(query)) {
        send(response, 401, unauthorized());
        return;
      }
      send(response, 200, buildXmltv(), "application/xml; charset=utf-8");
      return;
    }

    if (url.pathname === "/get.php" || url.pathname === "/get") {
      const query = await parseQuery(request, url);
      if (!isAuthed(query)) {
        send(response, 401, unauthorized());
        return;
      }
      send(response, 200, buildM3u(query.output || "ts"), "application/x-mpegURL; charset=utf-8");
      return;
    }

    const streamMatch = url.pathname.match(STREAM_PATH);
    if (streamMatch) {
      const [, kind, username, password, id, extension] = streamMatch;
      if (username !== USERNAME || password !== PASSWORD) {
        send(response, 401, unauthorized());
        return;
      }
      const sourceUrl = resolveSource(kind, id, extension);
      if (!sourceUrl) {
        send(response, 404, { error: "stream not found" });
        return;
      }
      redirectToSource(response, sourceUrl);
      return;
    }

    send(response, 404, { error: "not found" });
  } catch (error) {
    send(response, 500, { error: error instanceof Error ? error.message : "internal error" });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`screenshot xtream listening on ${PORT} (${PUBLIC_URL})`);
});
