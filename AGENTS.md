# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean-localized landing page template built with Next.js 14 and shadcn/ui components. The project is based on a v0.app template and features a modern SaaS landing page with multiple sections including hero, features, testimonials, pricing, FAQ, and CTA.

## Development Commands

### Running the Development Server
```bash
pnpm dev
```
Starts the Next.js development server at `http://localhost:3000`.

### Building for Production
```bash
pnpm build
```
Creates an optimized production build. Note: TypeScript build errors are currently ignored.

### Running Production Build Locally
```bash
pnpm start
```
Starts the production server (requires `pnpm build` first).

### Linting
```bash
pnpm lint
```
Runs Next.js ESLint checks.

## Architecture

### Project Structure
- `app/` - Next.js App Router
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Main landing page (client component)
  - `globals.css` - Global styles and Tailwind configuration
- `components/` - React components
  - `ui/` - shadcn/ui components (Radix UI primitives)
  - `*-section.tsx` - Landing page sections (hero, testimonials, pricing, FAQ, CTA, footer)
  - `contact-modal.tsx` - Contact form modal for lead capture
- `lib/utils.ts` - Utility functions (`cn` for className merging)

### Key Technical Details

**Next.js Configuration** (`next.config.mjs`):
- TypeScript build errors are ignored (`ignoreBuildErrors: true`)
- Images are unoptimized (`unoptimized: true`)

**Language & Localization**:
- Site language is Korean (`lang="ko"`)
- All content should be in Korean
- Metadata uses Korean titles and descriptions

**Fonts**:
- Sans-serif: Inter (variable font, `--font-inter`)
- Serif: Instrument Serif (for headings, `--font-instrument-serif`)
- Both fonts use `display: swap` for performance

**Path Aliases**:
- `@/*` maps to root directory
- Import example: `import { Button } from "@/components/ui/button"`

**shadcn/ui Configuration** (`components.json`):
- Style: "new-york"
- Base color: "neutral"
- Icon library: lucide-react (but react-icons is also installed)
- RSC (React Server Components) enabled
- CSS variables enabled for theming

### Component Patterns

**Client Components**:
Landing page sections use React hooks and interactivity, requiring `"use client"` directive.

**State Management**:
- Modal state managed in main page component
- Feature card rotation with progress indicators
- Auto-rotating carousel with manual override

**Styling**:
- Tailwind CSS with custom design tokens
- Color palette uses oklch color space
- Responsive design with mobile-first approach
- Custom decorative patterns using CSS borders

**Form Handling**:
Contact modal captures user information (name, email) for lead generation.

## Important Configuration Notes

1. **TypeScript Errors**: The build process ignores TypeScript errors. When making changes, ensure type safety even though errors won't block builds.

2. **Image Optimization**: Images are not optimized by Next.js. Use optimized images from the start or enable optimization when deploying.

3. **pnpm Usage**: This project uses pnpm as the package manager (not npm or yarn).

4. **Dark/Light Mode**: The global user configuration requires dark/light mode support, but current implementation may need enhancement.

5. **Icons**: Prefer `react-icons/lu` for general icons per user's global configuration.

## Planned Integrations

According to REAMDE.md, future work includes:
- Notion Database integration
- Gemini chatbot integration
