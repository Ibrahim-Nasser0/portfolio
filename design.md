# Design System & Aesthetics Specification (design.md)

This document specifies the design system, color tokens, typography scales, glassmorphism rules, component specs, and performance guidelines for **Ibrahim Nasser's Next.js Portfolio**.

---

## 🎨 Color Palette & Centralized Theme Tokens

All colors are centralized in `:root` and mapped via Tailwind `@theme` configuration in `globals.css` to prevent hardcoded color inconsistencies.

### Primary Canvas & Surface Architecture
- **Primary Canvas Background**: Deep Dark Slate `#0B0C0E` (`--bg`, `--color-canvas`)
- **Card Surface Background**: Charcoal `#15171E` (`--bg-elev`, `--color-surface`)
- **Card Surface Hover State**: Dark Charcoal `#1C1F28` (`--bg-elev-hover`, `--color-surface-hover`)
- **Glassmorphism Overlay**: `rgba(21, 23, 30, 0.85)` with `backdrop-filter: blur(20px)`

### Curated Color Hierarchy
1. **Primary Accent (Warm Gold / Amber)**: `#E58A2B` (Hover: `#F5A642`)
   - Used for main CTAs, active page indicators, headline accents, primary borders, and brand focal points.
2. **Secondary Accent (Muted Steel Slate)**: `#94A3B8` (`--accent-secondary`)
   - A sophisticated neutral steel slate used for section indexing eyebrows (`// 01`, `// 02`), metadata tags, and code comments to maintain a 100% harmonious dark mode palette.
3. **Tertiary Accent (Warm Copper / Ochre)**: `#D97706`
   - Used for warm radial glows, background gradients, and secondary hover highlights.

### Neutral & Text Scale
- **Display Headings Primary Text**: Pure White `#FFFFFF` / `#F3F4F6`
- **Secondary Body Text**: Muted Gray `#9CA3AF` / `#D1D5DB`
- **Code & Eyebrow Metadata Text**: Monospace Gold `#E58A2B` or Ice Blue `#38BDF8` / Faint Slate `#6B7280`

---

## ✒️ Typography & Font Optimization System

1. **Display Headings**: `Fraunces` (Serif Display font)
   - Used for main H1/H2 headlines, project titles, and section headers.
2. **Body & UI Text**: `Plus Jakarta Sans` (Sans-Serif body font)
   - Used for paragraph descriptions, feature bullet points, and card text.
3. **Code & Eyebrow Tags**: `JetBrains Mono` (Monospace font)
   - Used for navigation items, CLI terminal commands, tech tags, timestamps, and metadata tags.

> [!NOTE]
> All Google Fonts are self-hosted automatically via `next/font/google` in `src/app/layout.tsx` with `display: 'swap'` and CSS variable bindings (`--font-sans`, `--font-display`, `--font-mono`). External font `@import` calls are strictly forbidden to guarantee zero FOUT and zero CLS.

---

## 🧱 Component Specifications & Aesthetics Rules

### Glassmorphic Card Borders
- Standard border: `1px solid rgba(255, 255, 255, 0.10)`
- Hover border: `1px solid rgba(229, 138, 43, 0.50)` with `transition: border-color 300ms ease`

### Zero-Emoji & Clean Iconography Guideline
- Decorative emojis (`⚡`, `🚀`, `🌱`, `⚠️`, `⏳`, `🟢`, `👆`, `✓`) are prohibited in UI components and benchmark cards.
- Clean vector icons from `lucide-react` or custom SVG icons matching `#E58A2B` or `#38BDF8` accent colors must be used instead.

---

## ⚡ Performance & Mobile Architecture Rules

- **Zero Static Build Errors**: Every page route must compile cleanly in pre-rendered SSG mode (`npm run build`).
- **Dynamic Code-Splitting**: Heavy interactive components (`DeveloperTerminalModal`, `FlutterPlaygroundSection`, `ArchitectureVisualizerSection`) are dynamic chunk-loaded via `next/dynamic`.
- **Canvas Offscreen Pause**: Interactive HTML5 canvas components (`ParticlePortraitCanvas`, `AuroraBackground`) use `IntersectionObserver` and `document.hidden` checks to pause animation frame loops when offscreen or tab is hidden.
- **Clean Architecture**: Separation between Presentation (BLoC/Cubit state handlers), Domain (Entities/Use Cases), and Data (Dio API & Hive Local Caching).
