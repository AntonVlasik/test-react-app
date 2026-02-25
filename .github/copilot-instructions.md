# React Weather App - AI Coding Guide

## Project Overview

React 19 + TypeScript weather application using modern tooling. **Dev server runs on port 3000** via `npm start`.

## Key Tech Stack

- **Vite 7** with SWC (`@vitejs/plugin-react-swc`) - faster than Babel
- **React 19.2** + **TypeScript** (strict mode enabled)
- **TanStack Query** for API state management
- **React Router** for navigation
- **Material UI** with custom theme at `src/config/theme.ts`
- **Axios** for HTTP requests
- **Vitest** and **React Testing Library** for testing

## Essential Conventions

### Module Structure & Imports

- **Path alias**: `src/` maps to `/src` - always use `src/...` imports
- Services + React Query hooks per API domain (e.g., `useGetUsers()`, `useCreateUser()`)
- Components in `src/components/`, pages in `src/pages/`

### Build System

- Build output to `build/` directory
- Vite configuration split: `vite.config.ts` + `vite.plugins.ts`
- Legacy browser support via `@vitejs/plugin-legacy`
- SVG imports as React components via `vite-plugin-svgr`

## Development Workflow

```bash
npm start    # dev server (port 3000)
npm run build
npm test     # vitest
```

## Code Quality

- **TypeScript strict mode** - no `any` types
- **Prettier** for formatting
- **ESLint** + React rules
- **Husky** pre-commit hooks with lint-staged

## API Integration

Target: Foreca weather API (or any public alternative)

- Silent authentication (no user login UI)
- Use Axios + TanStack Query pattern
- Create API service functions + React Query hooks per domain
