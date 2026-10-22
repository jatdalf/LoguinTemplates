# Login Templates

**First impressions. Better sign-ins.**

A collection of twelve login interfaces exploring layout, animation, color, and visual identity. Built with React, JavaScript, and CSS/Sass, each design offers a different approach to the same moment: welcoming a user.

Originally created in 2023 and redesigned in 2026 with a refreshed gallery, consistent navigation, new concepts, and optimized media.

[Explore the live collection](https://login-templates.vercel.app/)

## The collection

| # | Interface | Concept |
| --- | --- | --- |
| 01 | Background Image | Warehouse photography paired with a clear sign-in panel. |
| 02 | Animated Logo | A minimal layout with a continuously rotating brand mark. |
| 03 | Carousel | A rotating image gallery and an integrated form panel. |
| 04 | Background Video | Full-background video with playback controls and a centered form. |
| 05 | Matrix Style | Canvas-rendered digital rain behind a translucent terminal. |
| 06 | Future | A retrofuturistic horizon with an animated perspective grid. |
| 07 | Neon Lights | A brick-wall backdrop with flickering neon typography and borders. |
| 08 | Multiple Logo Animations | Floating logos with independent movement and 3D rotation. |
| 09 | Dark and Blue | Floating labels and animated light tracing the submit button. |
| 10 | Editorial / Paper | Ivory and olive tones, serif typography, and a CSS landscape illustration. |
| 11 | Moonlit Portal | A moonlit sky, twinkling stars, and a luminous circular portal. |
| 12 | Prism / Liquid Light | Morphing pastel shapes behind a glass-like form panel. |

## Features

- A gallery with individual previews and dedicated routes for all twelve interfaces.
- Shared navigation and links back to the collection.
- Distinct visual identities, from restrained editorial layouts to animated experiments.
- CSS animations, a Canvas background, image slides, and video playback.
- Optimized WebP thumbnails and a compressed background video.
- Contact and About pages introducing the developer behind the project.

## Demo scope

This is a frontend interface showcase, not an authentication service. It does not include a backend, user accounts, password recovery, or session management.

Use fictional sample details when trying the forms. Browser validation and demo feedback are interface behaviors, not authentication. Any production integration would need its own authentication flow, server-side validation, and session handling.

## Built with

- **React 18** — component-based interfaces.
- **Vite** — development server and production builds.
- **React Router** — navigation between the gallery and individual designs.
- **JavaScript** — form interactions and animation logic.
- **CSS Modules and Sass** — component styling and visual effects.
- **Canvas API** — the Matrix-inspired background.
- **Vercel** — hosting and deployment.

Individual interfaces use different techniques; not every template needs the same dependencies.

## Run locally

### Requirements

- Node.js **24.x**
- npm

From the project directory, install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Generate the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the configured ESLint checks. |

## Project layout

```text
public/
  media/                  Gallery thumbnails
src/
  assets/                 Photographs, logos, and video
  components/
    Card/                 Gallery card
    CardContainer/        Collection data and grid
    NavBar/               Shared navigation
    Login01/ ... Login12/ Individual login interfaces
  views/
    Landing/              Project introduction
    Home/                 Template collection
    Contact/              Contact links
    About/                Developer profile
  App.jsx                 Application routes
```

## Customize a template

Each login has its own component and stylesheet under `src/components/`. Update its copy, colors, assets, or animation to explore a new direction.

Keep styling scoped to the component. Bare selectors such as `h1`, `button`, or `input[type="text"]` can affect other pages even inside a CSS Module; prefer local classes.

To add another interface:

1. Create its component and CSS Module.
2. Register its route in `App.jsx`.
3. Add it to the navbar's template list and update its active-route matching.
4. Add an entry to the gallery data in `CardContainer`.
5. Save a preview in `public/media` and update the collection counts.

A thumbnail stored at `public/media/login12.webp` is referenced as:

```jsx
cardImg: "/media/login12.webp"
```

For an independent application, extract the chosen interface together with the assets and dependencies it actually uses. Replace demo submission behavior with your authentication integration.

## Deployment

The project is deployed on Vercel. Its build configuration uses:

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js:** `24.x`

Keep the Node version explicit in `package.json`:

```json
"engines": {
  "node": "24.x"
}
```

When configuring another host, ensure client-side routes fall back to `index.html` so direct links and page refreshes work.

## Assets and attribution

Some examples include third-party logos, photography, and video. Their presence demonstrates interface concepts and does not imply affiliation or endorsement. Replace brand assets with your own and verify the applicable permissions before reusing or publishing them elsewhere.

## Author

**Jorge Toso** — full stack developer.

- [LinkedIn](https://www.linkedin.com/in/jorgetoso/)
- [Email](mailto:jorgetoso@hotmail.com)

Built with curiosity, refined through practice.
