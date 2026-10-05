# MUSE — AI Creator Showcase

A premium, mobile-first discovery experience for fictional AI personalities. Cinematic photography, editorial typography, and a restrained charcoal, ivory, and terracotta palette guide visitors from finding a creator to starting a conversation.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

Lucide React supplies icons. DM Sans and Instrument Serif are self-hosted with Fontsource. ESLint checks TypeScript, React hooks, and Fast Refresh compatibility.

## Features

- Mobile-first responsive design with equal mobile cards, a balanced tablet grid, and an asymmetric desktop composition.
- Four distinct AI-generated creators: ALEX, RYAN, LUNA, and MIA.
- Interactive creator profiles: mobile bottom sheets and immersive desktop modals.
- Mock social feed with original photography, editorial notes, and local like interactions.
- Interactive mock AI chat with creator-specific quick replies, typing indicators, timestamps, and free-text fallback responses.
- Telegram CTAs across the discovery-to-conversation journey.
- Premium entrance, reveal, image, and interaction animations that respect `prefers-reduced-motion`.
- Keyboard navigation, visible focus states, Escape and backdrop dismissal, modal focus handling, and body scroll locking.
- Complete English, Ukrainian, and Russian localization with a keyboard-accessible language selector and saved language preference.

## Getting Started

Use Node.js 22.13 or later within the 22.x release line and npm. `.nvmrc` and `package.json` keep local and deployment environments aligned.

```sh
npm ci
npm run dev
```

If you use nvm, run `nvm use` first. The development server starts at `http://127.0.0.1:5173` when the port is available.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

`lint` rejects warnings as well as errors. `build` checks TypeScript before generating the static production bundle in `dist/`. `preview` serves that bundle locally. No environment variables or service credentials are required to run the application.

## Architecture

```text
src/
  assets/creators/  # Optimized portraits, avatars, feed photography, generation prompts
  components/      # Landing sections, creator cards, profiles, feed, chat, shared CTAs
  data/            # Canonical creator records and local mock content
  hooks/           # One-time section reveals
  i18n/            # Typed dictionaries, language provider, localized content helpers
  types/           # Creator, post, conversation, and hero presentation models
  App.tsx          # Application composition
  main.tsx         # Entry point and local font imports
  index.css        # Tailwind theme, design tokens, and shared responsive styles
```

The landing page is composed of `Header`, `Hero`, `CreatorDiscovery`, `Vision`, `FinalConversation`, and `Footer`. Discovery owns the selected creator; `CreatorProfile` manages the open profile session. `CreatorPosts` and `CreatorConversation` handle feed reactions and conversation state. Shared `TelegramLink` and `ActivityStatus` components keep product signals consistent.

[`src/data/creators.ts`](src/data/creators.ts) is the single source of truth for the four identities. Posts and scripted conversations live in separate typed data modules; hero and discovery presentation data reference those canonical records. Creator content is not duplicated inside components.

[`src/types/creator.ts`](src/types/creator.ts) defines `Creator`, `Post`, `ChatMessage`, `ChatPrompt`, and `MockConversation`. A creator includes identity, category, biography, personality, local asset references, numeric social statistics, posts, and conversation prompts. `Post` is a discriminated union: image posts require an image, alt text, and dimensions; text posts contain editorial notes.

React state is scoped to the feature that owns it. Returning from chat preserves the draft, messages, profile scroll position, and local reactions. Closing a profile clears that session and cancels pending mock replies. No state-management framework is needed.

### Localization

English (`EN`) is the default. The header selector switches to Ukrainian (`UA`) or Russian (`RU`) immediately, saves the preference under `muse.language` in `localStorage`, and updates `<html lang>` to `en`, `uk`, or `ru`. Language selection also works when browser storage is unavailable; only persistence is skipped.

[`src/i18n/translations.ts`](src/i18n/translations.ts) contains the interface dictionaries, including accessibility labels and document metadata. Translation keys are checked by TypeScript. `LanguageProvider` supplies `useLanguage()` to components; no i18n library or external translation service is used.

Creator records remain shared. Translatable fields use `Localized<T>` and the `localized(en, ua, ru)` helper in the existing data modules. Names, usernames, statistics, asset references, and content IDs remain unchanged. Prepared chat messages follow the selected language, while free text authored by a visitor stays verbatim. Post dates use the selected locale and keep their original UTC timestamps.

To edit copy, update the interface dictionary or the corresponding localized creator, post, or conversation field. Adding a language requires updating the `Language` union, language options, dictionaries, and localized data; TypeScript identifies missing entries.

## Performance and Accessibility

Portraits use 800 × 1200 WebP images, avatars use 256 × 256 face crops, and supporting photography uses 960 × 640 WebP images. The leading hero portrait is preloaded; below-the-fold discovery, feed, and final-section images use native lazy loading and explicit dimensions. The same assets are reused across the landing page, profile, and chat. All fonts and imagery are served locally.

The conversation mounts on first use. A shared IntersectionObserver reveals landing sections once; keyboard focus exposes content immediately. Native dialogs provide modal semantics, with a stable accessible name, a keyboard focus loop, restored focus, and reduced-motion-aware entrance and exit behavior. Interactive controls have comfortable touch targets.

AI asset provenance and generation prompts are documented in [`src/assets/creators/README.md`](src/assets/creators/README.md) and [`feed-photography.md`](src/assets/creators/feed-photography.md).

Final browser QA covered 375, 390, 414, 430, 768, 1024, 1280, and 1440px in Chrome: all four creator profiles, posts, chat replies, session state, Telegram CTAs, keyboard navigation, Escape, and reduced motion. Automated accessibility and contrast checks passed, as did React StrictMode checks for warnings and pending-reply cleanup. Lint, type checking, a clean lockfile installation, and the production build are verified separately.

Localization QA covered all three languages at 375, 390, 430, 768, 1024, and 1440px: 18 responsive scenarios and 72 creator journeys. Checks include language persistence, document language, localized posts and scripted chat, keyboard selection, mobile navigation, reduced motion, invalid preferences, and unavailable browser storage. No horizontal overflow, broken images, or console warnings were found. Accessibility checks also cover the open language menu.

## Demo

[Open the live MUSE demo](https://muse-ai-creator-showcase.vercel.app/)

Hosted on Vercel. Run `npm run preview` to review the production build locally.

## Deployment

The project is configured for Vercel in [`vercel.json`](vercel.json):

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Node.js | 22.x |
| Install command | `npm ci` |
| Build command | `npm run lint && npm run build` |
| Output directory | `dist` |

Import the repository into Vercel, or run `vercel --prod` with an authenticated Vercel CLI. No environment variables, database, or backend are required. Static assets are processed by Vite, and the SPA fallback serves `index.html` for direct application URLs. The current experience uses section anchors and dialogs instead of separate profile routes. See the [Vercel Vite deployment guide](https://vercel.com/docs/frameworks/frontend/vite).

`node_modules/`, `dist/`, `.vercel/`, environment files, logs, and macOS metadata are excluded from Git. Deployment excludes local dependencies and build artifacts; Vercel creates the production bundle from the committed source and lockfile.

## Notes

All creators, posts, social statistics, online indicators, and chat interactions are fictional demo/mock data. Each creator has five recent posts and five scripted chat responses. The simulated typing delay is 1.1 seconds; arbitrary messages receive a local fallback response. No live AI model is called, and no messages or reactions are sent to a service.

All Telegram links use the demo destination `https://t.me/`. Replace `TELEGRAM_URL` in [`src/data/site.ts`](src/data/site.ts) to point every CTA at a real bot or Mini App. Clicking Telegram does not transfer the local conversation.

This is a frontend showcase with no backend, database, authentication, payments, or external API integration.
