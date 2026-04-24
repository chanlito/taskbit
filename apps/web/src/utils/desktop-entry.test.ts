import { describe, expect, it, vi } from 'vitest'

import { syncDesktopEntry } from './desktop-entry'

type TestWindow = {
  __TAURI_INTERNALS__?: unknown
  history: {
    replaceState: ReturnType<typeof createReplaceStateMock>
  }
  location: {
    pathname: string
  }
}

function createReplaceStateMock() {
  return vi.fn<History['replaceState']>()
}

function createTestWindow(pathname: string, isTauri = false): TestWindow {
  return {
    ...(isTauri ? { __TAURI_INTERNALS__: {} } : {}),
    history: {
      replaceState: createReplaceStateMock(),
    },
    location: {
      pathname,
    },
  }
}

describe('syncDesktopEntry', () => {
  it('opens production Tauri root launches on the app surface', () => {
    const win = createTestWindow('/', true)

    syncDesktopEntry(win)

    expect(win.history.replaceState).toHaveBeenCalledWith(null, '', '/app')
  })

  it('leaves normal browser root launches alone', () => {
    const win = createTestWindow('/')

    syncDesktopEntry(win)

    expect(win.history.replaceState).not.toHaveBeenCalled()
  })

  it('leaves existing app Tauri launches alone', () => {
    const win = createTestWindow('/app', true)

    syncDesktopEntry(win)

    expect(win.history.replaceState).not.toHaveBeenCalled()
  })
})
