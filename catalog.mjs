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
