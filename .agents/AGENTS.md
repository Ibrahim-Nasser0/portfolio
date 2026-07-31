# Workspace Customization & Engineering Guidelines

This document specifies the design guidelines, architectural rules, and UI/UX standards for Ibrahim Nasser's Next.js portfolio repository.

## Design System & Aesthetics
- **Style Reference**: Inspired by `https://www.surendarselvaraj.com/`.
- **Primary Canvas Background**: Deep Dark Slate `#0B0C0E`.
- **Card Surfaces**: Charcoal `#15171E` with subtle glassmorphism borders (`border border-white/10`).
- **Primary Accent Color**: Warm Gold / Amber `#E58A2B` (Hover: `#F5A642`).
- **Typography System**:
  - Display Headings: `Fraunces` (Serif Display font).
  - Body Text: `Plus Jakarta Sans` (Sans-Serif body font).
  - Code & Eyebrows: `JetBrains Mono` (Monospace font).
- **Background Effects**: Noise grain texture (`.grain-overlay`), top-right warm amber radial glow (`blur(120px)`), and micro dust specks.

## Navigation & Floating Controls
- **Dynamic Right Section Navigation (`RightSectionNav.tsx`)**:
  - Floating section indicator rendered on the right side of all pages.
  - Displays uppercase labels with horizontal dash lines (e.g. `WORK ―――`, `ABOUT ―――`).
  - Dynamically adapts section shortcuts based on the current page route (`/`, `/work`, `/about`, `/recognition`, `/insights`).

## Mobile & Cross-Platform Architecture Standards
- **Clean Architecture Principles**: Layer separation between Presentation (BLoC/Cubit), Domain (Entities/Use Cases), and Data (Dio API & Hive Local Caching).
- **SOLID Design Principles**: Single responsibility, open/closed, dependency inversion across all project modules.
- **Zero Static Build Errors**: Every page route must compile cleanly in pre-rendered SSG mode (`npm run build`).
