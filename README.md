# IPTVio screenshot Xtream demo

Xtream Codes-compatible panel used only for App Store screenshots.

It is not a real IPTV provider. Catalog titles, plots, and EPG are original
demo content. Stream URLs redirect to public sample videos.

## Connect in the app

- Server: `https://screenshot-xtream-d7860b-167-235-61-97.sslip.io`
- Username: `screenshot`
- Password: `demo`

EPG is served from `/xmltv.php`. The app picks that up automatically for Xtream.

## Local run

```bash
node server.mjs
```

## Catalog

Sourced from `screenshot-demo.m3u`:

- 9 live channels in 3 groups
- 6 movies in 2 groups
- 6 series, including Orbital S01–S02
- Rolling 48-hour XMLTV guide on every live channel
