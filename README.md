# FGM Gold Mining Limited: Website

Marketing website for **FGM Gold Mining Limited**, a gold exploration and mining company.
Built with React, TypeScript and Vite from the Figma design *FGM MINING LIMITED*.

## Live site

> **🌐 Live website:** `ADD YOUR NETLIFY URL HERE` <!-- e.g. https://fgm-mining.netlify.app -->

---

## Contents

1. [Overview](#overview)
2. [Tech stack](#tech-stack)
3. [Getting started](#getting-started)
4. [Project structure](#project-structure)
5. [Pages and routes](#pages-and-routes)
6. [Managing images and logos](#managing-images-and-logos)
7. [Editing content](#editing-content)
8. [Design tokens and styling](#design-tokens-and-styling)
9. [Responsive behaviour](#responsive-behaviour)
10. [Interactive features](#interactive-features)
11. [Enquiry form](#enquiry-form)
12. [Deploying to Netlify](#deploying-to-netlify)
13. [Remaining placeholders](#remaining-placeholders)
14. [Using Next.js instead](#using-nextjs-instead)

---

## Overview

A five-page site presenting the company, its licence portfolio, its operating approach and a
way to get in touch:

| Page | What it shows |
| --- | --- |
| Home | Hero, company summary, site photos, portfolio and "How We Mine" cards |
| About | Company story, key facts, the four principles ("What we believe") |
| Gallery | Photo gallery with a full-screen viewer |
| Collection | Licence register table and the six-stage "How We Mine" gate process |
| Contact | Head office details and an enquiry form |

Every page is built from small reusable components, uses semantic HTML, and works from
phone to desktop width.

## Tech stack

- [React 18](https://react.dev/) with function components and hooks
- [TypeScript](https://www.typescriptlang.org/) in strict mode
- [Vite 6](https://vite.dev/) for the dev server and production build
- [React Router 6](https://reactrouter.com/) for page navigation
- [lucide-react](https://lucide.dev/) for icons
- Plain CSS with custom properties (no CSS framework)
- Fonts from Google Fonts: **Lora** (headings), **Inter** (body), **IBM Plex Mono** (labels)

## Getting started

**Requirements:** Node.js 18 or newer, and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run typecheck` | Check types without building |
| `npm run build` | Type-check, then create the production build in `dist/` |
| `npm run preview` | Serve the production build locally to test it |

## Project structure

```
fgm-mining/
├── index.html                  Page shell: fonts and the #root element
├── netlify.toml                Netlify build + routing settings
├── package.json · tsconfig.json · vite.config.ts
└── src/
    ├── main.tsx                Entry point: router + global CSS
    ├── App.tsx                 Route table (the five pages)
    ├── styles/
    │   ├── tokens.css          Design tokens: colours, fonts, radii, shadows, layout
    │   └── base.css            Reset and shared helpers (.container, .eyebrow, .sr-only)
    ├── config/
    │   └── images.ts           All logo and photo slots (edit this to change images)
    ├── data/
    │   └── content.ts          Site copy, navigation, licences, operating stages
    ├── hooks/
    │   └── useDocumentTitle.ts Sets the browser tab title per page
    ├── assets/
    │   └── images/             Photos and logo files
    ├── components/             Shared, reusable pieces
    │   ├── Layout              Header + <main> + Footer, skip link, scroll handling
    │   ├── Header              Floating pill navigation with mobile menu
    │   ├── Footer              Identity, site directory, contact details
    │   ├── Button              Two-part button (works as a link or a form button)
    │   ├── Logo                Shows the configured logo, or a text fallback
    │   ├── MediaFrame          Shows a photo, or an image placeholder tile
    │   ├── PageIntro           Large serif page heading
    │   ├── ContactInvitation   "Good questions deserve clear answers" call-to-action band
    │   ├── home/               Hero · CompanyIntro · PhotoStrip · FeatureGrid
    │   ├── about/              Foundation · Beliefs
    │   ├── collection/         LicenceRegister · StageGates
    │   ├── gallery/            GalleryGrid · Lightbox
    │   └── contact/            ContactDetails · EnquiryForm · TextField
    └── pages/                  Home · About · Gallery · Collection · Contact
```

Each component keeps its CSS next to it (`Button.tsx` + `Button.css`), and page-specific
components share one stylesheet per folder (for example `home/home.css`).

## Pages and routes

| URL | Page component |
| --- | --- |
| `/` | `pages/Home.tsx` |
| `/about` | `pages/About.tsx` |
| `/gallery` | `pages/Gallery.tsx` |
| `/collection` | `pages/Collection.tsx` |
| `/contact` | `pages/Contact.tsx` |

Unknown URLs redirect to the home page. The Home page's "Our approach" button links to
`/collection#how-we-mine`, which scrolls straight to the process section.

## Managing images and logos

All images are controlled from **`src/config/images.ts`**. Image files live in
`src/assets/images/`.

### Change the logo (navigation bar and footer)

The site uses two versions of the logo: a **dark** one for the white navigation bar and a
**light** one for the brown footer. A transparent PNG or SVG works best.

1. Put the files in `src/assets/images/`, for example `logo-dark.svg` and `logo-light.svg`.
2. In `src/config/images.ts`, add the imports with the others at the top:
   ```ts
   import logoDark from '../assets/images/logo-dark.svg';
   import logoLight from '../assets/images/logo-light.svg';
   ```
3. Replace the `logoDark` and `logoLight` lines inside the `images` object:
   ```ts
   logoDark: photo(logoDark, 'FGM Gold Mining Limited', 51, 28),
   logoLight: photo(logoLight, 'FGM Gold Mining Limited', 147, 82),
   ```

The logo scales to fit about 51×28px in the nav and 147×82px in the footer. For a logo with
a different shape, adjust the sizes in `src/components/Logo.css`.

### Add or change photos

| Slot in `images.ts` | Where it appears |
| --- | --- |
| `hero` | Home page hero (tinted with the brand brown) |
| `homeGallery` | The three portrait photos under the hero |
| `aboutFoundation` | Portrait beside the intro text on the About page |
| `gallery` | Every photo on the Gallery page, in display order |

To add a photo to the gallery, drop the file in `src/assets/images/`, import it, and add a
line to the `gallery` list:

```ts
photo(myPhoto, 'Describe what the photo shows', 800, 600),
```

The two numbers are the file's real width and height in pixels. They let the browser
reserve the right space while the image loads, which prevents the page from jumping.
An optional fifth value sets the focus point when a photo is cropped, for example
`'center 60%'`.

Always write a meaningful description (the second value). It is read aloud by screen
readers and shown if the image fails to load.

**Tips:** keep photos under about 300 KB each (resize to roughly 1600px on the long side)
so the site loads quickly, and crop black bars or phone status bars before adding them.

## Editing content

All text on the site lives in **`src/data/content.ts`**: navigation links, company
description, the licence register, the six operating stages, the four principles and contact
details. Edit the values there; no component changes are needed.

A few items that appear only once are written directly in the code instead: page headings
such as "Grounded in geology." (in `src/pages/`) and the two cards on the Home page
(`src/components/home/FeatureGrid.tsx`).

## Design tokens and styling

Colours, fonts, corner radii, shadows and layout widths are defined once in
**`src/styles/tokens.css`** and used everywhere else through CSS variables, so a change
there updates the whole site.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-brand` | `#3E2A18` | Dark brown: buttons, footer, dark sections |
| `--color-gold` | `#AD8A49` | Button arrow block, accents |
| `--color-surface` | `#FFFFFF` | White sections |
| `--color-surface-beige` | `#EEEAE1` | Beige sections and page backgrounds |
| `--color-ink` | `#1B211E` | Headings |
| `--color-muted` | `#686C64` | Secondary text |

The hero photo's brown tint comes from `--overlay-brand-strong` and `--overlay-brand-soft`,
which are derived from `--color-brand`.

## Responsive behaviour

- Headings and spacing scale smoothly with the screen width.
- The layout adapts at about **1100px**, **860px** and **560px**.
- On screens up to 860px wide, the navigation collapses into a menu button, two-column
  sections stack, and the licence register turns into stacked cards.
- The gallery shows three columns on desktop and two on tablets and phones.

## Interactive features

- **Buttons and links:** hover, pressed and keyboard-focus states; the current page is
  highlighted in the navigation.
- **Mobile menu:** opens from the menu button; closes with Escape or when you choose a page.
- **Gallery viewer:** click any photo to enlarge it. Use the arrow buttons or the left and
  right arrow keys to move between photos, and Escape or the close button to leave.
- **Licence register and "What we believe" rows:** highlight on hover.
- **Accessibility:** a "Skip to content" link, keyboard-friendly controls, labelled form
  fields, and reduced-motion support.

## Enquiry form

The Contact page form validates in the browser: name, a valid email address, a message and
the consent checkbox are required. It then shows a success or error message.

**It does not send anything yet.** `EnquiryForm` accepts an `onSubmit` function, and the
default one only waits a moment so the screens can be previewed. To receive enquiries, pass in
a function that posts to your service, for example:

```tsx
<EnquiryForm
  onSubmit={async (values) => {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error('Request failed'); // shows the error message
  }}
/>
```

Options that suit a Netlify site: [Netlify Forms](https://docs.netlify.com/forms/setup/),
a Netlify Function, or a form service such as Formspree.

## Deploying to Netlify

The repo includes a `netlify.toml` with the correct settings, so deployment is mostly
automatic.

### From GitHub (recommended)

1. Push the project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Confirm the settings (they are read from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. Every later push to the main branch redeploys the site automatically.
5. Copy the site URL and paste it into the [Live site](#live-site) section at the top of this file.

### Why `netlify.toml` matters

The site is a single-page app, so pages such as `/about` exist only in the browser. The
redirect rule in `netlify.toml` (`/*` → `/index.html`) makes sure opening or refreshing a
page directly works instead of showing a "Page not found" error.

### Custom domain

In Netlify, open **Domain management → Add a domain** and follow the DNS instructions.
HTTPS is set up automatically.

## Remaining placeholders

Text in `[square brackets]` was carried over from the Figma design and needs real details:

- Office address, email address and telephone number (footer and Contact page)
- Licence names, types, jurisdictions and stages (Collection page)
- `[jurisdiction]`, `[city]`, `[regulator]`, `[refiner]` and similar values in the copy
- The headquarters city on the About page

Most of these live in `src/data/content.ts`. The bracketed text in the Collection page
summary is in `src/pages/Collection.tsx`.

## Using Next.js instead

The components are not tied to Vite. To move to Next.js: replace `Link` and `NavLink` from
`react-router-dom` with `next/link` (in `Button`, `Header` and `Footer`), move the files in
`pages/` into the App Router, and mark the interactive components (`Header`, `Lightbox`,
`EnquiryForm`) with `'use client'`.
