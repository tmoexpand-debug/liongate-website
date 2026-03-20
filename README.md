# Lion Gate Pest — Website

Professional multi-page static website for Lion Gate Pest Control, built with **Astro 4.x** + **Tailwind CSS**. Deploy-ready for Vercel.

## 🚀 Quick Start

```bash
npm install
npm run dev       # Start local dev server at http://localhost:4321
npm run build     # Build for production → ./dist/
npm run preview   # Preview production build locally
```

## 📁 Project Structure

```
liongate-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro           # Sticky nav with dropdown + mobile hamburger
│   │   ├── PreFooterCTA.astro  # Dark green CTA strip (every page)
│   │   └── Footer.astro        # Full footer with 3-column links
│   ├── layouts/
│   │   └── Layout.astro        # Shared layout (nav + pre-footer + footer)
│   ├── pages/
│   │   ├── index.astro         # Home page (/)
│   │   ├── pest-control.astro  # /pest-control
│   │   ├── rodent-control.astro# /rodent-control
│   │   ├── contact.astro       # /contact
│   │   └── reviews.astro       # /reviews
│   └── styles/
│       └── global.css          # Tailwind + custom component styles
├── astro.config.mjs
├── tailwind.config.mjs
├── vercel.json
└── package.json
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow prompts. Vercel auto-detects Astro.

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Astro framework settings
5. Click **Deploy**

### Option 3: Manual via vercel.json

The included `vercel.json` configures:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `astro`

## 📱 SMS CTA Format

All SMS buttons use:
```html
<a href="sms:+18183534800&body=SAVE50">...</a>
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Green | `#2D5A3D` | Nav, footer, headlines |
| Medium Green | `#3A7D44` | CTA buttons |
| White | `#FFFFFF` | Text on dark bg |
| Light Green | `#EAF2EC` | Section backgrounds |
| Body Text | `#1A1A1A` | Body copy |

## 📝 TODO Items

After deployment, complete these tasks:

1. **Logo**: Replace "LION GATE PEST" text in Nav.astro with actual logo image
2. **Reviews**: Replace placeholder review cards with live Google/Yelp widget
3. **Google Business**: Add Google Business & Yelp profile links on `/reviews`
4. **Analytics**: Add Google Analytics or similar tracking
5. **Map**: Update Google Maps embed URL with actual business address
6. **Meta images**: Add og:image for social sharing

## 🔧 Tech Stack

- [Astro 4.x](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Fonts — Montserrat](https://fonts.google.com/specimen/Montserrat)
- Vanilla JS (hamburger menu, FAQ accordion, pest modal)
- Static output (no server-side rendering required)
