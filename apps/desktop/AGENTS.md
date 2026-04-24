# Agent Instructions

## Package Manager

- Use **pnpm** through the desktop workspace: `pnpm --filter @taskbit/desktop <script>`

## Commands

Use desktop build for Tauri config/bundling changes or final verification, not after every edit.

| Task       | Command                                                         |
| ---------- | --------------------------------------------------------------- |
| Dev        | `pnpm --filter @taskbit/desktop dev`                            |
| Build      | `pnpm --filter @taskbit/desktop build`                          |
| Install    | `pnpm --filter @taskbit/desktop build:install`                  |
| Test       | `pnpm --filter @taskbit/desktop test`                           |
| Rust check | `cargo check --manifest-path apps/desktop/src-tauri/Cargo.toml` |

## Development Workflow

- Prefer `cargo check --manifest-path apps/desktop/src-tauri/Cargo.toml` for Rust-only changes
- Do not run root commands from here unless the change affects another workspace or shared config
- Run `pnpm --filter @taskbit/desktop build` only when Tauri bundling/config changed or before final handoff
- Use `pnpm --filter @taskbit/desktop build:install` when the built macOS app should replace `/Applications/Taskbit.app`

## Key Conventions

- Tauri config lives in `src-tauri/tauri.conf.json`
- `devUrl` points to `http://localhost:6900`
- `frontendDist` points to `../../web/dist`
- Desktop reuses `apps/web`; do not add another frontend surface here
- Keep Tauri icons desktop-only; do not generate or commit `src-tauri/icons/ios/` or `src-tauri/icons/android/`
- Keep Rust code under `src-tauri/src/`
- Do not commit `src-tauri/target/`
