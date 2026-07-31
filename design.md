# Design System & Aesthetics Specification (design.md)

This document specifies the design system, color tokens, typography scales, glassmorphism rules, and component specs for **Ibrahim Nasser's Next.js Portfolio**.

---

## 🎨 Color Palette & Design Tokens

### Primary Canvas & Backgrounds
- **Primary Canvas Background**: Deep Dark Slate `#0B0C0E`
- **Card Surface Background**: Charcoal `#15171E`
- **Card Surface Translucent Glass**: `rgba(21, 23, 30, 0.90)` with `backdrop-filter: blur(20px)`
- **Header & Pill Navigation Surface**: `rgba(21, 23, 30, 0.90)` with `backdrop-filter: blur(16px)`

### Accent & Highlight Colors
- **Primary Warm Gold / Amber Accent**: `#E58A2B`
- **Primary Accent Hover State**: `#F5A642`
- **Subtle Amber Halo Glow**: `rgba(229, 138, 43, 0.15)` to `rgba(245, 166, 66, 0.30)`
- **Verified / Success Green**: `#10B981` (Emerald 500)
- **Interactive Tech Tag Background**: `rgba(255, 255, 255, 0.05)` with `border: 1px solid rgba(255, 255, 255, 0.10)`

### Neutral & Text Scale
- **Display Headings Primary Text**: Pure White `#FFFFFF`
- **Secondary Body Text**: Muted Gray `#9CA3AF` / `#D1D5DB`
- **Code & Eyebrow Metadata Text**: `#6B7280` / `#E58A2B`

---

## ✒️ Typography System

1. **Display Headings**: `Fraunces` (Serif Display font)
   - Used for main H1/H2 headlines, project titles, and section headers.
2. **Body & UI Text**: `Plus Jakarta Sans` (Sans-Serif body font)
   - Used for paragraph descriptions, feature bullet points, and card text.
3. **Code & Eyebrow Tags**: `JetBrains Mono` (Monospace font)
   - Used for navigation items, CLI terminal commands, tech tags, timestamps, and metadata tags.

---

## 🧱 Component Specifications & Glassmorphism Rules

### Glassmorphic Card Borders
- Standard border: `1px solid rgba(255, 255, 255, 0.10)`
- Hover border: `1px solid rgba(229, 138, 43, 0.50)` with `transition: border-color 300ms ease`

### Floating Navigation & Contact Dock
- **Logo**: Sleek text brand `Ibrahim.Nasser` with glowing pulsing amber indicator dot.
- **Center Navigation Pill**: 5 core page links (`Home`, `Work`, `Playground`, `About`, `Insights`) + Sticky 350ms grace delay `More ▾` dropdown.
- **Contact Popover Dock**: Single unified trigger displaying high-resolution brand links for **GitHub**, **LinkedIn**, **WhatsApp**, **Email Inbox**, and **Résumé PDF**.

---

## 📱 Mobile Architecture & SSG Rules

- **Zero Static Build Errors**: Every page route complies cleanly with pre-rendered SSG mode (`npm run build`).
- **Clean Layered Architecture**: Separation between Presentation (BLoC/Cubit state handlers), Domain (Entities/Use Cases), and Data (Dio API & Hive Local Caching).
