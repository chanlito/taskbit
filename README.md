# Taskbit

Taskbit is a pnpm workspace monorepo with a React 19 web app, a Nitro API, a Tauri desktop wrapper, and a small shared TypeScript contract package.

## Stack

- pnpm workspaces + Turborepo
- React 19 + Vite + TanStack Router
- Tailwind CSS 4
- Nitro API server
- Tauri v2 desktop shell
- Vitest
- Oxlint + Oxfmt

## Getting Started

Install dependencies:

```bash
pnpm install
```

`pnpm install` also installs the repo's Git hooks through the `prepare` script.

Start the web app and API together:

```bash
pnpm dev
```

The web app runs on [http://localhost:6900](http://localhost:6900).

## Scripts

```bash
pnpm dev          # run web + API through Turbo
pnpm dev:web      # run only the Vite web app on port 6900
pnpm dev:api      # run only the Nitro API on port 6969
pnpm dev:desktop  # run the Tauri desktop app
pnpm build        # build workspaces through Turbo
pnpm test         # run workspace tests
pnpm lint         # run Oxlint
pnpm format       # check formatting with Oxfmt
pnpm typecheck    # run workspace typechecks
pnpm check        # write formatting/import fixes, then run Oxlint with --fix
```

## Project Structure

```text
apps/
  web/       # React + Vite + TanStack Router SPA
  api/       # Nitro server
  desktop/   # Tauri wrapper around apps/web
packages/
  shared/    # app constants and shared API response types
```

## Routing Notes

- Add web routes under `apps/web/src/routes/`.
- Do not edit `apps/web/src/routeTree.gen.ts` manually.
- Add API routes under `apps/api/server/api/`.
- Add non-API Nitro routes under `apps/api/server/routes/`.
- Import shared contracts from `@taskbit/shared`.

## Useful File-Scoped Commands

```bash
pnpm --filter @taskbit/web exec oxlint src/routes/index.tsx
pnpm --filter @taskbit/web test -- src/routes/-index.test.tsx
pnpm --filter @taskbit/web exec oxfmt --check src/routes/index.tsx
pnpm --filter @taskbit/api test -- server/api/health.test.ts
pnpm --filter @taskbit/shared test -- src/index.test.ts
cargo check --manifest-path apps/desktop/src-tauri/Cargo.toml
```
