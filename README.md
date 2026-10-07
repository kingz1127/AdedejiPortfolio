# Adedeji Oshunyingbo — Portfolio

A production-ready portfolio for **Adedeji Oshunyingbo**, a full-stack software engineer specializing in Java backend (Spring Boot) and modern React frontends. Built to be fast, accessible, animated, and honest about what I actually ship.

Live: **https://kingz1127.github.io/AdedejiPortfolio/**

## ✨ Features

- **6 pages** — Home, Work, About, Expertise, Contact, and a 404 fallback
- **Live GitHub integration** — pulls pinned public repos at runtime with no hardcoded fallback data
- **Curated flagship projects** — ICM Global Outreach and other non-public work rendered alongside GitHub repos
- **Animated 3D hero** — CSS-driven scene with pointer tracking and floating glass cards
- **Scroll reveals & 3D tilts** — powered by Motion, with reduced-motion support
- **Counting stats** — "Years building", "40% faster API at ICM", "3-tier RBAC" all animate from zero on scroll
- **Deployed links** — projects with a live URL show a "Visit live site" button in the case-study dialog
- **Working contact form** — delivers to email via Web3Forms, with success and error states
- **Full stack of skills** — Backend, Fintech, Product, Mobile, Data & Cloud
- **Fully responsive** — mobile-first from 320px up
- **Accessible** — keyboard-navigable dialogs, focus rings, semantic markup, reduced-motion honored

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Configure environment

Create `.env.local` at the project root:

```
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Get a free access key at **https://web3forms.com/** — enter `osunyingboadedeji1@gmail.com`, copy the key, paste it above. `.env.local` is gitignored.

### Develop

```bash
npm run dev
```

Dev server runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🐳 Docker

Multi-stage Dockerfile builds the Vite output and serves it with nginx.

### Build

```bash
docker build -t adedeji-portfolio .
```

### Run

```bash
docker run -d -p 8080:80 adedeji-portfolio
```

Visit `http://localhost:8080`.

> **Note:** The Docker build uses `base: '/'` by default. For subpath deploys:
> ```bash
> docker build --build-arg BASE_PATH=/AdedejiPortfolio/ -t adedeji-portfolio .
> ```

## 📦 Deployment to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

### One-time setup

1. Push code to a repo named **`AdedejiPortfolio`**
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**
3. Add a repository secret called **`VITE_WEB3FORMS_KEY`** at **Settings → Secrets and variables → Actions**
4. Push to `main` — the workflow runs and deploys

### Live URL

```
https://kingz1127.github.io/AdedejiPortfolio/
```

### SPA routing

A `404.html` file is copied from `index.html` during build so client-side routes resolve correctly on GitHub Pages.

## 🗂 Project Structure

```
src/
  components/
    motion/              # Reveal, Stagger, TiltCard primitives
    sections/            # Hero, ImpactStrip, WorkPreview, ExpertiseSection,
                         # AboutSection, ContactSection, ProjectVisual,
                         # CaseStudyDialog, TimelineSection
    ui/                  # shadcn/ui primitives
    Footer.tsx
    Navbar.tsx
    Eyebrow.tsx
    ScrollToTop.tsx
  data/
    projects.ts          # Manual project entries (ICM etc.) + Project type
    about.ts             # Timeline, principles, education
  hooks/
    useGitHubRepos.ts    # Live GitHub fetch + pinned repo config
  pages/
    HomePage.tsx
    Work.tsx
    About.tsx
    Expertise.tsx
    Contact.tsx
    NotFound.tsx
  lib/
    utils.ts             # cn() helper
  index.css              # Theme bridge + bespoke 3D CSS + keyframes
  App.tsx                # Router + RootLayout + ScrollToTop
  main.tsx
```

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix primitives) |
| Routing | React Router v7 |
| Animation | Motion |
| Icons | Lucide + React Icons (Simple Icons) |
| Forms | Web3Forms (serverless email delivery) |
| Deployment | GitHub Pages via GitHub Actions |
| Container | Docker (nginx:alpine) |

## 📜 Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## 🎨 Theme

All colors, fonts, and radii live in `src/index.css` under `@theme` and are bridged to shadcn's semantic tokens (`--background`, `--primary`, `--border`, etc.).

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#11110f` | Main dark background |
| `--color-ink-soft` | `#1a1a17` | Elevated dark surfaces |
| `--color-paper` | `#f1efe8` | Primary light surface and text |
| `--color-paper-deep` | `#e6e3da` | Hovered light surfaces |
| `--color-brand` | `#ff5c20` | Primary accent |
| `--color-brand-light` | `#ff8a4c` | Highlights |
| `--color-brand-dark` | `#bd2e00` | 3D shading |
| `--color-muted` | `#a7a59d` | Secondary text |
| `--color-muted-dark` | `#686760` | Text on light backgrounds |
| `--color-success` | `#6ee7a5` | Availability indicator |

Project accents: `--color-project-orange`, `--color-project-violet`, `--color-project-mint`, `--color-project-blue`.

## 🐙 GitHub Integration

`src/hooks/useGitHubRepos.ts` fetches public repos from `api.github.com/users/kingz1127/repos`, filters them by the names in `PINNED_REPOS`, and returns them ordered as specified.

**To add or reorder featured repos**, edit three constants in that file:

```ts
export const PINNED_REPOS: string[] = [
  "DevOps-CloudSandBox",
  "Hackathon-project",
  // ...
];

export const REPO_CATEGORIES: Record<string, RepoCategory> = {
  "DevOps-CloudSandBox": "Full-stack",
  "Hotel-booking-backend": "Backend",
  // ...
};

export const TITLE_OVERRIDES: Record<string, string> = {
  "DevOps-CloudSandBox": "DevOps CloudSandbox",
  // ...
};
```

- **Descriptions, links, stars, language, and updated date** all come directly from GitHub
- **Only the title can be overridden** for polish
- **Categories are assigned manually** so the Work page filter works
- **Homepage shows the first 3** via `useGitHubRepos(3)`; **Work page shows all** via `useGitHubRepos(null)`

If a pinned repo has no description on GitHub, the card shows "No description on GitHub yet." Set the description on the repo's About section on GitHub to fix it.

## 🧩 Manual Projects

Not all flagship work is public. **ICM Global Outreach** (The InnerCity Mission) lives in `src/data/projects.ts` as a manual entry:

```ts
export const manualProjects: Project[] = [
  {
    id: "icm",
    title: "ICM Global Outreach",
    category: "Backend",
    // ...
    manual: true,
  },
];
```

`Work.tsx` merges `manualProjects` with the GitHub-fetched repos, so ICM always appears first.

## 📬 Contact Form

The form on `/contact` submits to **Web3Forms**, a serverless form backend:

- Submissions arrive at `osunyingboadedeji1@gmail.com`
- Honeypot and reply-to fields included
- Success and error states are handled inline
- The access key is provided via `VITE_WEB3FORMS_KEY` (local `.env.local` and GitHub Actions secret)

## 📄 License

MIT © Adedeji Oshunyingbo

---

## Appendix — Config Files

### `.github/workflows/deploy.yml`

```yaml
---
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5

      - name: Setup Node
        uses: actions/setup-node@v5
        with:
          node-version: 24
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_BASE: /AdedejiPortfolio/
          VITE_WEB3FORMS_KEY: ${{ secrets.VITE_WEB3FORMS_KEY }}

      - name: Copy index.html to 404.html
        run: cp dist/index.html dist/404.html

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### `vite.config.ts`

```ts
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### `Dockerfile`

```dockerfile
FROM node:20-alpine AS build

WORKDIR /app

ARG BASE_PATH=/
ENV VITE_BASE=${BASE_PATH}

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### `nginx.conf`

```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff2?)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  location = /healthz {
    access_log off;
    return 200 "ok\n";
  }
}
```

### `.dockerignore`

```
node_modules
dist
.git
.gitignore
*.md
.github
.vscode
.vite
```

### `.gitignore`

```
node_modules
dist
dist-ssr
*.local
.DS_Store
.vite
.env*
!.env.example
```

### `components.json` (shadcn)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-nova",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
```