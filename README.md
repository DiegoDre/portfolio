# Diego Dreier — Portfolio

Personal developer portfolio, built as a small single-page web app with **Vite, React, TypeScript and Tailwind CSS**.

🔗 Live: https://diego-dreier-portfolio-29j7.onrender.com

## Tech stack

- **React 18 + TypeScript** — component-based UI, fully typed
- **Vite** — dev server and production build
- **Tailwind CSS** — utility-first styling with class-based dark mode
- Content (skills, projects) is data-driven via typed modules in `src/data/`

## Project structure

```
.
├── index.html              # Vite entry (head, dark-mode init, #root mount)
├── src/
│   ├── main.tsx            # React entry
│   ├── index.css           # Tailwind directives
│   ├── App.tsx             # Page composition
│   ├── components/         # Header, About, Skills, Projects, ProjectCard, Contact, Footer
│   └── data/               # skills.ts, projects.ts (typed content)
├── public/static/          # images, project files, CV (served at /static/…)
├── tailwind.config.js
└── vite.config.ts
```

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
```

## Dark mode

The theme is toggled via the button in the header and persisted in `localStorage`.
A tiny inline script in `index.html` applies the saved theme before first paint to
avoid a flash of the wrong theme.

## Deployment

This is a static build. On a host like Render / Netlify / Vercel use:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
