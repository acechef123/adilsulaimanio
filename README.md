# Adil Sulaiman — Personal Website

Personal website for Adil Sulaiman, built with **Next.js** (App Router), **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It features an interactive 3D hero powered by [Spline](https://spline.design/).

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) component structure
- [@splinetool/react-spline](https://github.com/splinetool/react-spline) — 3D scenes
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server             |
| `npm run build` | Create an optimized production build     |
| `npm run start` | Run the production build                 |
| `npm run lint`  | Run ESLint                               |

## Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind layers, theme variables, loader styles
│   ├── layout.tsx         # Root layout (dark mode, fonts, metadata)
│   └── page.tsx           # Home page — mounts the 3D hero
├── components/
│   └── ui/                # shadcn/ui components
│       ├── card.tsx
│       ├── demo.tsx       # SplineSceneBasic — the hero section
│       ├── splite.tsx     # SplineScene — lazy-loaded 3D scene
│       └── spotlight.tsx  # Animated spotlight effect
├── lib/
│   └── utils.ts           # cn() class-name helper
├── components.json        # shadcn/ui configuration
└── tailwind.config.ts     # Theme + custom spotlight animation
```

> **Note:** UI components live in `components/ui` so they resolve through the
> shadcn `@/components/ui` import alias. Keeping this path lets you add more
> components later with `npx shadcn@latest add <component>` without rewiring imports.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new):

1. Import the `acechef123/adilsulaimanio` repository.
2. Vercel auto-detects Next.js — no configuration needed.
3. Each push gets its own preview URL, and the production branch deploys automatically.
