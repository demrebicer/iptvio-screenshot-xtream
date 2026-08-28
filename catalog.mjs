// Catalog sourced from screenshot-demo.m3u.
// Artwork URLs stay as-is for now; posters can be swapped later
// with generated, copyright-safe assets.

const TS_BUNNY = "https://filesamples.com/samples/video/ts/sample_1280x720_surfing_with_audio.ts";
const TS_SURF = "https://filesamples.com/samples/video/ts/sample_1280x720_surfing_with_audio.ts";
const TS_OCEAN = "https://filesamples.com/samples/video/ts/sample_960x400_ocean_with_audio.ts";

const MP4 = {
  bunny: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephants: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  blazes: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  sintel: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  fun: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  subaru: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  gti: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  bullrun: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  grand: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
};

export const ADDED = "1704067200";

export const liveCategories = [
  { category_id: "1", category_name: "Live Channels Group 1", parent_id: 0 },
  { category_id: "2", category_name: "Live Channels Group 2", parent_id: 0 },
  { category_id: "3", category_name: "Live Channels Group 3", parent_id: 0 },
];

export const vodCategories = [
  { category_id: "10", category_name: "Movies Group 1", parent_id: 0 },
  { category_id: "11", category_name: "Movies Group 2", parent_id: 0 },
];

export const seriesCategories = [
  { category_id: "20", category_name: "Series", parent_id: 0 },
  { category_id: "21", category_name: "Series Group 1", parent_id: 0 },
  { category_id: "22", category_name: "Series Group 2", parent_id: 0 },
];

export const liveStreams = [
  live(1001, "Live Channel 1", "1", "https://i.hizliresim.com/c96tim6.png", TS_BUNNY),
  live(1002, "Live Channel 2", "1", "https://i.hizliresim.com/m0lxv29.png", TS_SURF),
  live(1003, "Live Channel 3", "1", "https://i.hizliresim.com/su6ci6q.png", TS_OCEAN),
  live(1004, "Live Channel 4", "2", "https://i.hizliresim.com/5jen256.png", TS_BUNNY),
  live(1005, "Live Channel 5", "2", "https://i.hizliresim.com/n1k3n68.png", TS_SURF),
  live(1006, "Live Channel 6", "2", "https://i.hizliresim.com/be453l0.png", TS_OCEAN),
  live(1007, "Live Channel 7", "3", "https://i.hizliresim.com/hddnooj.png", TS_BUNNY),
  live(1008, "Live Channel 8", "3", "https://i.hizliresim.com/hb9c1zb.png", TS_SURF),
  live(1009, "Live Channel 9", "3", "https://i.hizliresim.com/hbypgq4.png", TS_OCEAN),
];

export const vodStreams = [
  vod(2001, "A Thousand Tomorrows", "10", "https://i.hizliresim.com/ncte079.jpg", MP4.bunny, {
    plot: "A cartographer returns to a coastal town to finish a map she abandoned ten years ago, and finds the shoreline has rewritten every memory she trusted.",
    cast: "Elena Vargas, Jonah Hale, Priya Seth",
    director: "Mira Solano",
    genre: "Drama",
    releasedate: "2024-03-12",
    duration: "01:42:00",
    rating: "7.8",
  }),
  vod(2002, "Spark", "10", "https://i.hizliresim.com/ro0hgmd.jpg", MP4.elephants, {
    plot: "An engineer and a glassblower race to keep a remote observatory online during a week-long solar storm that turns the night sky into a warning.",
    cast: "Theo Marin, Asha Quinn, Luis Ortega",
    director: "Kenji Mora",
    genre: "Adventure",
    releasedate: "2023-11-04",
    duration: "01:28:00",
    rating: "8.1",
  }),
  vod(2003, "Movie 3", "10", "https://i.hizliresim.com/bi7pl74.jpg", MP4.bunny, {
    plot: "Three strangers share a delayed night train and realize they are carrying pieces of the same missing story.",
    cast: "Nora Blake, Samir Cole, Ivy Tran",
    director: "Helen Cho",
    genre: "Mystery",
    releasedate: "2022-09-18",
    duration: "01:36:00",
    rating: "7.2",
  }),
  vod(2004, "Movie 4", "11", "https://i.hizliresim.com/4l7uh5h.jpg", MP4.blazes, {
    plot: "A junior archivist discovers a banned radio play and has 48 hours to decide whether the city should hear it again.",
    cast: "Owen Park, Lila Mendes, Craig Yoon",
    director: "Rafael Dunn",
    genre: "Thriller",
    releasedate: "2024-01-20",
    duration: "01:51:00",
    rating: "7.5",
  }),
  vod(2005, "Champion", "11", "https://i.hizliresim.com/alvu7vl.jpg", MP4.sintel, {
    plot: "After a career-ending injury, a climber coaches a rookie through a mountain race that was never meant to be finished alone.",
    cast: "Maya Ruiz, Ben Calloway, Soren Idris",
    director: "Patrice Ndiaye",
    genre: "Sports Drama",
    releasedate: "2023-06-09",
    duration: "01:47:00",
    rating: "8.4",
  }),
  vod(2006, "Movie 6", "11", "https://i.hizliresim.com/lw81ohw.jpg", MP4.fun, {
    plot: "A quiet baker inherits a lighthouse and the last letter of a sailor who promised to come back on the first clear tide.",
    cast: "June Keller, Omar Said, Tess Brennan",
    director: "Clara Voss",
    genre: "Romance",
    releasedate: "2021-05-14",
    duration: "01:33:00",
    rating: "7.0",
  }),
];

const ORBITAL_PLOT =
  "Commander Rachel Torres leads a crew of astronauts aboard the International Space Station during humanity's most critical mission. 250 miles above Earth, they must make impossible choices that will determine the fate of 8 billion people below. A gripping sci-fi drama about courage, sacrifice, and the bonds that hold us together.";

export const seriesList = [
  series(3001, "Orbital", "20", "https://i.hizliresim.com/nfam8ov.jpg", {
    plot: ORBITAL_PLOT,
    cast: "Rachel Torres, Malik Okonkwo, June Park, Evan Solis",
    director: "Ada Voss",
    genre: "Sci-Fi Drama",
    releaseDate: "2024-01-12",
    rating: "8.7",
  }),
  series(3002, "Test Series 2", "21", "https://i.hizliresim.com/atrhkgi.jpg", {
    plot: "A field team maps forgotten subway lines and finds a city that has been living one minute behind the rest of the world.",
    cast: "Chris Bell, Dana Cho",
    director: "Ivy Hart",
    genre: "Drama",
    releaseDate: "2023-04-02",
    rating: "7.4",
  }),
  series(3003, "Test Series 3", "21", "https://i.hizliresim.com/ko9zj6w.jpg", {
    plot: "Four roommates run a late-night radio hour that starts receiving tomorrow's headlines a day early.",
    cast: "Mina Sol, Rob Hale",
    director: "Paul Nunez",
    genre: "Comedy",
    releaseDate: "2022-10-21",
    rating: "7.1",
  }),
  series(3004, "Test Series 4", "22", "https://i.hizliresim.com/jne4f5f.jpg", {
    plot: "A restoration crew is hired to reopen a closed mountain hotel and discovers every room is booked by the same missing guest.",
    cast: "Tara Quinn, Leo Berg",
    director: "Sofia Kade",
    genre: "Mystery",
    releaseDate: "2023-08-11",
    rating: "7.6",
  }),
  series(3005, "Test Series 5", "22", "https://i.hizliresim.com/6hspn7p.jpg", {
    plot: "A junior diplomat is assigned to a floating archive where nations store the stories they do not want remembered.",
    cast: "Amir Cole, Wren Daly",
    director: "Noor Elbaz",
    genre: "Political Drama",
    releaseDate: "2024-02-03",
    rating: "7.9",
  }),
  series(3006, "Test Series 6", "22", "https://i.hizliresim.com/yv1zalo.jpg", {
    plot: "A cart racing league in a desert port city becomes the only legal way to settle old family debts.",
    cast: "Pia Moreau, Hank Ruiz",
    director: "Eli Navarro",
    genre: "Action",
    releaseDate: "2021-07-30",
    rating: "7.3",
  }),
];

const ORBITAL_EPISODES = {
  1: [
    { title: "Lift", plot: "The crew undocks for a blackout window and learns the mission clock is already lying to them.", url: MP4.subaru },
    { title: "Blackout", plot: "Communications drop for seventeen minutes. When they return, Earth is asking for a decision no protocol covers.", url: MP4.gti },
    { title: "The Window", plot: "Rachel has one orbital pass to choose between the station and the people waiting on the ground.", url: MP4.bullrun },
    { title: "Reentry", plot: "A damaged capsule becomes the only way home, and the crew votes with the planet watching.", url: MP4.grand },
  ],
  2: [
    { title: "Ground Control", plot: "Six months later, the survivors are split between a hearing on Earth and a silent station above it.", url: MP4.bullrun },
    { title: "Drift", plot: "A new crew member arrives with orders that were never meant to be read aloud.", url: MP4.grand },
    { title: "The Vote", plot: "The station's remaining air is enough for five. There are six names on the roster.", url: MP4.bullrun },
    { title: "Home", plot: "Rachel makes the last call of the mission and leaves the window open for whoever comes next.", url: MP4.grand },
  ],
};

const GENERIC_EPISODES = {
  1: [
    { title: "Episode 1", plot: "The team takes the first assignment and finds the map is already out of date.", url: MP4.subaru },
    { title: "Episode 2", plot: "A second lead appears in the last place they agreed not to look.", url: MP4.gti },
    { title: "Episode 3", plot: "Alliances shift when the archive opens a door that should have stayed sealed.", url: MP4.bullrun },
    { title: "Episode 4", plot: "The season closes on a choice that cannot be walked back.", url: MP4.grand },
  ],
};

let nextEpisodeId = 4001;
export const episodesBySeriesId = {};

for (const item of seriesList) {
  const source = item.series_id === 3001 ? ORBITAL_EPISODES : GENERIC_EPISODES;
  const seasons = {};
  for (const [seasonKey, episodes] of Object.entries(source)) {
    seasons[seasonKey] = episodes.map((episode, index) => {
      const id = nextEpisodeId++;
      return {
        id: String(id),
        episode_num: index + 1,
        title: `S${String(seasonKey).padStart(2, "0")}E${String(index + 1).padStart(2, "0")} - ${episode.title}`,
        container_extension: "mp4",
        season: Number(seasonKey),
        added: ADDED,
        info: {
          plot: episode.plot,
          duration: "00:10:00",
          movie_image: item.cover,
          releasedate: item.releaseDate,
        },
        source_url: episode.url,
      };
    });
  }
  episodesBySeriesId[item.series_id] = seasons;
}

export const epgPrograms = [
  "Morning Desk",
  "City Report",
  "World Hour",
  "Midday Magazine",
  "Open Studio",
  "Afternoon Live",
  "Field Notes",
  "Evening Brief",
  "Night Desk",
  "Overnight Watch",
  "Late Signal",
  "Dawn Recap",
];

function live(stream_id, name, category_id, stream_icon, source_url) {
  return {
    num: stream_id - 1000,
    name,
    stream_type: "live",
    stream_id,
    stream_icon,
    epg_channel_id: `demo.live.${stream_id}`,
    added: ADDED,
    category_id,
    custom_sid: "",
    tv_archive: 0,
    direct_source: "",
    tv_archive_duration: 0,
    source_url,
  };
}

function vod(stream_id, name, category_id, stream_icon, source_url, info) {
  return {
    num: stream_id - 2000,
    name,
    stream_type: "movie",
    stream_id,
    stream_icon,
    rating: info.rating,
    rating_5based: Number((Number(info.rating) / 2).toFixed(1)),
    added: ADDED,
    category_id,
    container_extension: "mp4",
    custom_sid: "",
    direct_source: "",
    source_url,
    info: {
      name,
      o_name: name,
      movie_image: stream_icon,
      cover_big: stream_icon,
      plot: info.plot,
      description: info.plot,
      cast: info.cast,
      director: info.director,
      genre: info.genre,
      releasedate: info.releasedate,
      duration: info.duration,
      rating: info.rating,
      backdrop_path: [],
      youtube_trailer: "",
      tmdb_id: "",
    },
  };
}

function series(series_id, name, category_id, cover, info) {
  return {
    num: series_id - 3000,
    name,
    series_id,
    cover,
    plot: info.plot,
    cast: info.cast,
    director: info.director,
    genre: info.genre,
    releaseDate: info.releaseDate,
    release_date: info.releaseDate,
    last_modified: ADDED,
    rating: info.rating,
    rating_5based: Number((Number(info.rating) / 2).toFixed(1)),
    backdrop_path: [],
    youtube_trailer: "",
    episode_run_time: "45",
    category_id,
    source_cover: cover,
  };
}
