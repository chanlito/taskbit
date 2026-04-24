type DesktopWindow = {
  __TAURI_INTERNALS__?: unknown
  history: Pick<History, 'replaceState'>
  location: Pick<Location, 'pathname'>
}

export function syncDesktopEntry(win: DesktopWindow = window): void {
  if (!('__TAURI_INTERNALS__' in win) || win.location.pathname !== '/') {
    return
  }

  win.history.replaceState(null, '', '/app')
}
