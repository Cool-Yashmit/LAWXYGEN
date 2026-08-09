# LAWXYGEN Node.js

This version migrates the existing LAWXYGEN PHP shell to Node.js + Express + EJS without changing the current homepage design.

## First-time setup

1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Open the terminal in this folder.
4. Run:

```bash
npm install
```

5. Start development mode:

```bash
npm run dev
```

6. Open:

```text
http://localhost:3000
```

## Normal use later

Every time you work on the project, open the project folder and run:

```bash
npm run dev
```

Stop the server with Ctrl+C.

## Production command

```bash
npm start
```

## Project structure

- `server.js` - Express server
- `routes/pages.js` - page routes
- `views/index.ejs` - homepage
- `views/partials/navbar.ejs` - reusable navbar
- `public/css/style.css` - current website CSS
- `public/js/script.js` - current frontend JavaScript
- `public/assets/images/` - images

## Backend roadmap

The database and authentication packages are intentionally not installed yet. Next backend stages can add MySQL, login/register, services, admin dashboard, orders and payments without changing the Node foundation.
