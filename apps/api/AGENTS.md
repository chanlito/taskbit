# Agent Instructions

## Package Manager

- Use **pnpm** through the API workspace: `pnpm --filter @taskbit/api <script>`

## Commands

Use workspace-wide commands for API-wide changes or final verification, not after every edit.

| Task         | Command                                |
| ------------ | -------------------------------------- |
| Dev          | `pnpm --filter @taskbit/api dev`       |
| Build        | `pnpm --filter @taskbit/api build`     |
| Test         | `pnpm --filter @taskbit/api test`      |
| Lint         | `pnpm --filter @taskbit/api lint`      |
| Format check | `pnpm --filter @taskbit/api format`    |
| Typecheck    | `pnpm --filter @taskbit/api typecheck` |

## File-Scoped Commands

| Task              | Command                                                        |
| ----------------- | -------------------------------------------------------------- |
| Health route test | `pnpm test -- server/api/health.test.ts`                       |
| Index route test  | `pnpm test -- server/routes/index.test.ts`                     |
| Route lint        | `pnpm exec oxlint server/api/health.ts server/routes/index.ts` |

## Development Workflow

- Prefer the route's colocated test plus file lint/format while iterating
- Do not run root commands from here unless the change affects another workspace or shared config
- Run `pnpm --filter @taskbit/api build` when Nitro routing/config changed or before final handoff

## Key Conventions

- Nitro config is `nitro.config.ts` with `srcDir: './server'`
- API dev runs on `http://localhost:6969`
- Put API routes under `server/api/`; `server/api/health.ts` maps to `/api/health`
- Put non-API routes under `server/routes/`; `server/routes/index.ts` maps to `/`
- Import response contracts from `@taskbit/shared`; do not duplicate public payload types
- Keep route tests beside the route file as `*.test.ts`; `nitro.config.ts` ignores test files during route scanning
- Build output is `.output/`; do not commit it
