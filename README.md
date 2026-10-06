# Adedeji Oshunyingbo — Portfolio

A production-ready portfolio for Adedeji Oshunyingbo, a software engineer focused on resilient Java backends, expressive React interfaces, and products built to perform at scale.

Built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, **shadcn/ui**, **Motion**, and **React Router v7**. Deployed to **GitHub Pages** and containerized with **Docker**.

## ✨ Features

- **6 pages** — Home, Work, About, Expertise, Contact, and a 404 fallback
- **Live GitHub integration** — pulls your public repos with a curated fallback
- **Animated 3D hero** — CSS-driven scene with pointer tracking
- **Scroll reveals & 3D tilts** — powered by Motion, with reduced-motion support
- **Fully responsive** — mobile-first from 320px up
- **Accessible** — keyboard-navigable dialogs, focus rings, semantic markup

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview

```bash
npm run preview
```

## 🐳 Docker

The project includes a multi-stage Dockerfile that builds the Vite output and serves it with nginx.

### Build the image

```bash
docker build -t adedeji-portfolio .
```

### Run the container

```bash
docker run -d -p 8080:80 adedeji-portfolio
```

Visit `http://localhost:8080`.

> **Note:** The Docker setup uses `base: '/'` by default. To build for a subpath inside Docker, pass a build arg:
> ```bash
> docker build --build-arg BASE_PATH=/adedeji-3d-portfolio/ -t adedeji-portfolio .
> ```

## 📦 Deployment to GitHub Pages

This repository includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages on every push to `main`.

### One-time setup

1. Push your code to a repo named **`adedeji-3d-portfolio`** (or rename and update the `base` in `vite.config.ts`).
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push to `main` — the workflow runs and deploys.

### Live URL

```
https://kingz1127.github.io/adedeji-3d-portfolio/
```

### How SPA routing works on Pages

A `404.html` file is generated during the build (copied from `index.html`) so client-side routes resolve correctly on GitHub Pages.

## 🗂 Project Structure

```
src/
  components/
    motion/          # Reveal, Stagger, TiltCard primitives
    sections/        # Hero, ImpactStrip, WorkPreview, etc.
    ui/              # shadcn/ui primitives
    Footer.tsx
    Navbar.tsx
    Eyebrow.tsx
    ScrollToTop.tsx
  data/
    projects.ts      # Curated project case studies
    about.ts         # Timeline & principles
  hooks/
    useGitHubRepos.ts
  pages/
    HomePage.tsx
    Work.tsx
    About.tsx
    Expertise.tsx
    Contact.tsx
    NotFound.tsx
  lib/
    utils.ts         # cn() helper
  index.css          # Theme bridge + bespoke 3D CSS
  App.tsx
  main.tsx
```

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Routing | React Router v7 |
| Animation | Motion |
| Icons | Lucide + React Icons |
| Deployment | GitHub Pages (Actions) |
| Container | Docker (nginx:alpine) |

## 📜 Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 📄 License

MIT © Adedeji Oshunyingbo

---

## Appendix — Setup Files

