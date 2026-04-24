# Agent Instructions

## Package Manager

- Use **pnpm** through the web workspace: `pnpm --filter @taskbit/web <script>`

## Commands

Use workspace-wide commands for web-wide changes or final verification, not after every edit.

| Task         | Command                                |
| ------------ | -------------------------------------- |
| Dev          | `pnpm --filter @taskbit/web dev`       |
| Build        | `pnpm --filter @taskbit/web build`     |
| Test         | `pnpm --filter @taskbit/web test`      |
| Lint         | `pnpm --filter @taskbit/web lint`      |
| Format check | `pnpm --filter @taskbit/web format`    |
| Typecheck    | `pnpm --filter @taskbit/web typecheck` |

## File-Scoped Commands

| Task         | Command                                        |
| ------------ | ---------------------------------------------- |
| Route lint   | `pnpm exec oxlint src/routes/index.tsx`        |
| Route test   | `pnpm test -- src/routes/-index.test.tsx`      |
| Format check | `pnpm exec oxfmt --check src/routes/index.tsx` |
| Format write | `pnpm exec oxfmt src/routes/index.tsx`         |
| Typecheck    | `pnpm typecheck`                               |

## Development Workflow

- Prefer the relevant route/component test, file lint, and file format check while iterating
- Do not run root commands from here unless the change affects another workspace or shared config
- Run `pnpm --filter @taskbit/web build` only when Vite/router/build behavior changed or before final handoff

## Key Conventions

- Vite config lives in `vite.config.ts`; React Compiler is enabled with `reactCompilerPreset()`
- Prefer Tailwind utilities for styling before adding or expanding rules in `src/styles.css`
- Use `src/styles.css` only for global tokens, app-wide base styles, or styles that cannot be cleanly expressed with Tailwind utilities
- Prefer installed `shadcn/ui` components over custom-styled HTML
- Before building new component UI with raw markup and Tailwind, check whether an existing `shadcn/ui` component or local wrapper already fits the need
- Keep custom UI components small, composable, and consistent with existing design patterns
- Use `#/*` or `@/*` for `src/` imports and `tests/*` for web test helpers
- Put route files in `src/routes/`; name them by URL segment such as `index.tsx` or `about.tsx`
- Every route page defines `head()` metadata for the document title
- Never edit `src/routeTree.gen.ts`; confirm it updates cleanly after route changes
- Keep app tests beside code in `src/`; keep shared web test helpers in `tests/`
