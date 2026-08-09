# LAWXYGEN - Node.js + Cloudflare Workers

This project keeps the existing EJS source files for development and pre-renders them to static HTML for Cloudflare Workers Static Assets. Express runs inside a Worker for API/backend routes.

## First setup

1. Install Node.js LTS.
2. Run `npm install`.
3. Run `npm run dev` for a Cloudflare-local preview.
4. Open the URL Wrangler prints (normally http://localhost:8787).

For the classic Node/EJS local server, run `npm run dev:node` and open http://localhost:3000.

## Cloudflare deployment

The repository must include `wrangler.jsonc`, `src/worker.mjs`, `build.js`, `views`, and `public`.

In Cloudflare Workers Builds, use:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Or simply use deploy command `npm run deploy` with no separate build command.

The `dist` folder is generated automatically and does not need to be edited manually.

## Test backend

After deployment, open `/api/health` to confirm Express is running inside Cloudflare Workers.
