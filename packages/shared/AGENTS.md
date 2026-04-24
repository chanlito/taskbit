# Agent Instructions

## Package Manager

- Use **pnpm** through the shared workspace: `pnpm --filter @taskbit/shared <script>`

## Commands

Use workspace-wide commands for shared-contract changes or final verification, not after every edit.

| Task         | Command                                   |
| ------------ | ----------------------------------------- |
| Build        | `pnpm --filter @taskbit/shared build`     |
| Test         | `pnpm --filter @taskbit/shared test`      |
| Lint         | `pnpm --filter @taskbit/shared lint`      |
| Format check | `pnpm --filter @taskbit/shared format`    |
| Typecheck    | `pnpm --filter @taskbit/shared typecheck` |

## File-Scoped Commands

| Task          | Command                          |
| ------------- | -------------------------------- |
| Contract test | `pnpm test -- src/index.test.ts` |
| Contract lint | `pnpm exec oxlint src/index.ts`  |

## Development Workflow

- Prefer the contract test and file lint/format while iterating
- Do not run root commands from here unless a consuming app changed too
- Run dependent app tests or builds only for apps affected by the shared-contract change

## Key Conventions

- Export public constants and API contracts from `src/index.ts`
- Keep this package framework-free and browser/server neutral
- Use `@taskbit/shared` from apps; do not reach into `src/` by relative path
- Add tests for public contract changes in `src/index.test.ts`
