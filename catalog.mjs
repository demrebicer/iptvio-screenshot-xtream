// Catalog sourced from screenshot-demo.m3u.
// Artwork URLs stay as-is for now; posters can be swapped later
// with generated, copyright-safe assets.

// Same public samples that apple-demo.m3u settled on after Google's
// gtv-videos-bucket started returning 403.
const HLS = {
  mux: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  bipbop: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
  tears: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
};

const TS_SURF = "https://filesamples.com/samples/video/ts/sample_1280x720_surfing_with_audio.ts";
const TS_OCEAN = "https://filesamples.com/samples/video/ts/sample_960x400_ocean_with_audio.ts";

const MP4 = {
  bunny: "https://media.w3.org/2010/05/bunny/movie.mp4",
  elephants: "https://archive.org/download/ElephantsDream/ed_hd.mp4",
  sintel: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  clip: "https://media.w3.org/2010/05/video/movie_300.mp4",
};

export const ADDED = "1704067200";

const ART_BASE = (process.env.PUBLIC_URL || "https://screenshot-xtream-d7860b-167-235-61-97.sslip.io").replace(/\/$/, "");
const art = (file) => `${ART_BASE}/posters/${file}`;

export const liveCategories = [
  { category_id: "1", category_name: "News", parent_id: 0 },
  { category_id: "2", category_name: "Sports", parent_id: 0 },
  { category_id: "3", category_name: "Lifestyle", parent_id: 0 },
];

export const vodCategories = [
  { category_id: "10", category_name: "Featured", parent_id: 0 },
  { category_id: "11", category_name: "Adventure", parent_id: 0 },
  { category_id: "12", category_name: "Feel Good", parent_id: 0 },
];

export const seriesCategories = [
  { category_id: "20", category_name: "Featured", parent_id: 0 },
  { category_id: "21", category_name: "Lifestyle", parent_id: 0 },
  { category_id: "22", category_name: "Drama", parent_id: 0 },
];

export const liveStreams = [
  live(1001, "City Desk", "1", "https://i.hizliresim.com/c96tim6.png", TS_SURF, HLS.mux),
  live(1002, "Harbor News", "1", "https://i.hizliresim.com/m0lxv29.png", TS_SURF, HLS.bipbop),
  live(1003, "World Hour", "1", "https://i.hizliresim.com/su6ci6q.png", TS_OCEAN, HLS.tears),
  live(1004, "Match Day", "2", "https://i.hizliresim.com/5jen256.png", TS_SURF, HLS.mux),
  live(1005, "Night Watch", "2", "https://i.hizliresim.com/n1k3n68.png", TS_SURF, HLS.bipbop),
  live(1006, "Open Court", "2", "https://i.hizliresim.com/be453l0.png", TS_OCEAN, HLS.tears),
  live(1007, "Morning Desk", "3", "https://i.hizliresim.com/hddnooj.png", TS_SURF, HLS.mux),
  live(1008, "Late Signal", "3", "https://i.hizliresim.com/hb9c1zb.png", TS_SURF, HLS.bipbop),
  live(1009, "Dawn Recap", "3", "https://i.hizliresim.com/hbypgq4.png", TS_OCEAN, HLS.tears),
];

export const vodStreams = [
  vod(2001, "Harbor Light", "10", art("harbor-light.jpg"), MP4.bunny, {
    plot: "A cartographer returns to a coastal town to finish a map she abandoned ten years ago, and finds the shoreline has rewritten every memory she trusted.",
    cast: "Elena Vargas, Jonah Hale, Priya Seth",
    director: "Mira Solano",
    genre: "Romance",
    releasedate: "2024-03-12",
    duration: "01:42:00",
    rating: "7.8",
  }),
  vod(2002, "Champion", "10", art("champion.jpg"), MP4.sintel, {
    plot: "After a career-ending injury, a runner coaches a rookie through a race that was never meant to be finished alone.",
    cast: "Maya Ruiz, Ben Calloway, Soren Idris",
    director: "Patrice Ndiaye",
    genre: "Sports Drama",
    releasedate: "2023-06-09",
    duration: "01:47:00",
    rating: "8.4",
  }),
  vod(2003, "Open House", "10", art("open-house.jpg"), MP4.bunny, {
    plot: "A junior broker has one afternoon to sell a glass house, and the open house turns into the strangest party on the street.",
    cast: "Nora Blake, Samir Cole, Ivy Tran",
    director: "Helen Cho",
    genre: "Comedy",
    releasedate: "2022-09-18",
    duration: "01:36:00",
    rating: "7.2",
  }),
  vod(2004, "Spark", "11", art("spark.jpg"), MP4.elephants, {
    plot: "An engineer and a glassblower race to keep a remote observatory online during a week-long solar storm that turns the night sky into a warning.",
    cast: "Theo Marin, Asha Quinn, Luis Ortega",
    director: "Kenji Mora",
    genre: "Adventure",
    releasedate: "2023-11-04",
    duration: "01:28:00",
    rating: "8.1",
  }),
  vod(2005, "Day Train", "11", art("day-train.jpg"), MP4.sintel, {
    plot: "Three strangers share a delayed carriage and realize they are carrying pieces of the same missing story.",
    cast: "Owen Park, Lila Mendes, Craig Yoon",
    director: "Rafael Dunn",
    genre: "Drama",
    releasedate: "2024-01-20",
    duration: "01:51:00",
    rating: "7.5",
  }),
  vod(2006, "The Block", "12", art("the-block.jpg"), MP4.clip, {
    plot: "A quiet street is rebuilt as a living puzzle, and the last empty lot decides who the neighborhood becomes.",
    cast: "June Keller, Omar Said, Tess Brennan",
    director: "Clara Voss",
    genre: "Comedy",
    releasedate: "2021-05-14",
    duration: "01:33:00",
    rating: "7.0",
  }),
  vod(2007, "Paper Plane", "11", art("paper-plane.jpg"), MP4.bunny, {
    plot: "A rooftop dare turns into a city-wide paper-plane race that nobody planned to take seriously.",
    cast: "Chris Bell, Dana Cho",
    director: "Ivy Hart",
    genre: "Adventure",
    releasedate: "2024-07-02",
    duration: "01:24:00",
    rating: "7.4",
  }),
  vod(2008, "Gold Hour", "12", art("gold-hour.jpg"), MP4.elephants, {
    plot: "A baker inherits a sunrise kitchen and the last recipe of a sailor who promised to come back on the first clear tide.",
    cast: "Mina Sol, Rob Hale",
    director: "Paul Nunez",
    genre: "Drama",
    releasedate: "2022-10-21",
    duration: "01:38:00",
    rating: "7.6",
  }),
  vod(2009, "North Star", "12", art("north-star.jpg"), MP4.clip, {
    plot: "A navigator follows a compass that points to people, not places, across one bright alpine morning.",
    cast: "Tara Quinn, Leo Berg",
    director: "Sofia Kade",
    genre: "Adventure",
    releasedate: "2023-08-11",
    duration: "01:41:00",
    rating: "7.9",
  }),
  vod(2010, "Glass Tide", "10", art("glass-tide.jpg"), MP4.bunny, {
    plot: "A coastal architect builds a pavilion that only appears at high tide, and the town has to decide what it is willing to lose to keep it.",
    cast: "Lina Ortiz, Cal Renner",
    director: "Mira Solano",
    genre: "Drama",
    releasedate: "2024-04-08",
    duration: "01:39:00",
    rating: "7.6",
  }),
  vod(2011, "Second Shift", "10", art("second-shift.jpg"), MP4.sintel, {
    plot: "After the day crew leaves, a night printer and a baker share one kitchen and a deadline that cannot wait until morning.",
    cast: "Noah Pell, Sera Quinn",
    director: "Patrice Ndiaye",
    genre: "Drama",
    releasedate: "2023-09-15",
    duration: "01:31:00",
    rating: "7.4",
  }),
  vod(2012, "Night Market", "10", art("night-market.jpg"), MP4.clip, {
    plot: "A lantern-maker follows a stall that moves one street over every night, selling maps to places that do not exist yet.",
    cast: "Asha Quinn, Luis Ortega",
    director: "Helen Cho",
    genre: "Mystery",
    releasedate: "2024-02-22",
    duration: "01:44:00",
    rating: "7.7",
  }),
  vod(2013, "Red Canyon", "11", art("red-canyon.jpg"), MP4.elephants, {
    plot: "A canyon courier has one afternoon of wind to deliver a letter that rewrites the map of every settlement below the rim.",
    cast: "Theo Marin, Ivy Tran",
    director: "Kenji Mora",
    genre: "Adventure",
    releasedate: "2023-05-03",
    duration: "01:26:00",
    rating: "7.8",
  }),
  vod(2014, "Salt Road", "11", art("salt-road.jpg"), MP4.bunny, {
    plot: "A surveyor walks a white salt highway that appears only after rain, chasing a town that keeps moving one mile farther west.",
    cast: "Owen Park, Mina Sol",
    director: "Rafael Dunn",
    genre: "Adventure",
    releasedate: "2024-06-14",
    duration: "01:35:00",
    rating: "7.5",
  }),
  vod(2015, "Wind Gate", "11", art("wind-gate.jpg"), MP4.sintel, {
    plot: "An alpine pass opens for twelve hours a year, and the first person through has to choose who the mountain lets follow.",
    cast: "Tara Quinn, Chris Bell",
    director: "Sofia Kade",
    genre: "Adventure",
    releasedate: "2022-11-19",
    duration: "01:40:00",
    rating: "7.9",
  }),
];

const ORBITAL_PLOT =
  "Commander Rachel Torres leads a crew of astronauts aboard the International Space Station during humanity's most critical mission. 250 miles above Earth, they must make impossible choices that will determine the fate of 8 billion people below. A gripping sci-fi drama about courage, sacrifice, and the bonds that hold us together.";

export const seriesList = [
  series(3001, "Orbital", "20", art("orbital.jpg"), {
    plot: ORBITAL_PLOT,
    cast: "Rachel Torres, Malik Okonkwo, June Park, Evan Solis",
    director: "Ada Voss",
    genre: "Sci-Fi Drama",
    releaseDate: "2024-01-12",
    rating: "8.7",
  }),
  series(3002, "Flight Path", "20", art("flight-path.jpg"), {
    plot: "A cartographer of the sky maps forgotten air routes and finds a city that has been living one minute behind the rest of the world.",
    cast: "Chris Bell, Dana Cho",
    director: "Ivy Hart",
    genre: "Adventure",
    releaseDate: "2023-04-02",
    rating: "7.4",
  }),
  series(3003, "Copper Line", "20", art("copper-line.jpg"), {
    plot: "A restoration crew reopens a closed railway hotel and discovers every room is booked by the same missing passenger.",
    cast: "Tara Quinn, Leo Berg",
    director: "Sofia Kade",
    genre: "Period Drama",
    releaseDate: "2023-08-11",
    rating: "7.6",
  }),
  series(3004, "Sunday Kitchen", "21", art("sunday-kitchen.jpg"), {
    plot: "A sunrise cook inherits a lemon-lit kitchen and the last recipe of a sailor who promised to return on the first clear tide.",
    cast: "Mina Sol, Rob Hale",
    director: "Paul Nunez",
    genre: "Lifestyle",
    releaseDate: "2022-10-21",
    rating: "7.1",
  }),
  series(3005, "City Limits", "21", art("city-limits.jpg"), {
    plot: "Four roommates on a fire escape start a radio hour that receives tomorrow's headlines a day early.",
    cast: "Nora Blake, Samir Cole",
    director: "Helen Cho",
    genre: "Comedy",
    releaseDate: "2024-02-03",
    rating: "7.9",
  }),
  series(3006, "Blue Room", "21", art("blue-room.jpg"), {
    plot: "A junior designer is hired to finish one perfect room, and every client asks for the same missing chair.",
    cast: "June Keller, Omar Said",
    director: "Clara Voss",
    genre: "Design",
    releaseDate: "2021-07-30",
    rating: "7.3",
  }),
  series(3007, "River Bend", "22", art("river-bend.jpg"), {
    plot: "A field team follows a green river that redraws the map each morning, and a red canoe is the only constant.",
    cast: "Amir Cole, Wren Daly",
    director: "Noor Elbaz",
    genre: "Drama",
    releaseDate: "2024-05-18",
    rating: "7.8",
  }),
  series(3008, "First Watch", "22", art("first-watch.jpg"), {
    plot: "Two morning hosts keep a live show running when the sun disc in the studio starts answering questions first.",
    cast: "Pia Moreau, Hank Ruiz",
    director: "Eli Navarro",
    genre: "Comedy",
    releaseDate: "2023-03-09",
    rating: "7.5",
  }),
  series(3009, "Late Signal", "22", art("late-signal.jpg"), {
    plot: "A coral motel sign starts spelling names of guests who have not checked in yet.",
    cast: "Elena Vargas, Jonah Hale",
    director: "Mira Solano",
    genre: "Mystery",
    releaseDate: "2024-08-01",
    rating: "7.7",
  }),
];

const ORBITAL_EPISODES = {
  1: [
    { title: "Lift", plot: "The crew undocks for a blackout window and learns the mission clock is already lying to them.", url: MP4.bunny },
    { title: "Blackout", plot: "Communications drop for seventeen minutes. When they return, Earth is asking for a decision no protocol covers.", url: MP4.clip },
    { title: "The Window", plot: "Rachel has one orbital pass to choose between the station and the people waiting on the ground.", url: MP4.sintel },
    { title: "Reentry", plot: "A damaged capsule becomes the only way home, and the crew votes with the planet watching.", url: MP4.elephants },
  ],
  2: [
    { title: "Ground Control", plot: "Six months later, the survivors are split between a hearing on Earth and a silent station above it.", url: MP4.sintel },
    { title: "Drift", plot: "A new crew member arrives with orders that were never meant to be read aloud.", url: MP4.elephants },
    { title: "The Vote", plot: "The station's remaining air is enough for five. There are six names on the roster.", url: MP4.sintel },
    { title: "Home", plot: "Rachel makes the last call of the mission and leaves the window open for whoever comes next.", url: MP4.elephants },
  ],
};

const GENERIC_EPISODES = {
  1: [
    { title: "Episode 1", plot: "The team takes the first assignment and finds the map is already out of date.", url: MP4.bunny },
    { title: "Episode 2", plot: "A second lead appears in the last place they agreed not to look.", url: MP4.clip },
    { title: "Episode 3", plot: "Alliances shift when the archive opens a door that should have stayed sealed.", url: MP4.sintel },
    { title: "Episode 4", plot: "The season closes on a choice that cannot be walked back.", url: MP4.elephants },
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

function live(stream_id, name, category_id, stream_icon, source_url, hls_url) {
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
    hls_url,
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
