import { render } from '@testing-library/react'
import {
  RouterContextProvider,
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import type { RenderResult } from '@testing-library/react'

import { routeTree } from '#/routeTree.gen'

function createTestRouter(
  initialEntries: string[] = ['/'],
): ReturnType<typeof createRouter> {
  const history = createMemoryHistory({
    initialEntries,
  })

  return createRouter({
    history,
    routeTree,
  })
}

function ensureWindowScrollTo(): void {
  Object.defineProperty(window, 'scrollTo', {
    configurable: true,
    value: () => undefined,
    writable: true,
  })
}

export function renderRoute(initialEntries: string[] = ['/']): RenderResult {
  ensureWindowScrollTo()

  const router = createTestRouter(initialEntries)

  return render(<RouterProvider router={router} />)
}

export function renderWithRouterContext(
  ui: ReactNode,
  initialEntries: string[] = ['/'],
): RenderResult {
  const router = createTestRouter(initialEntries)

  return render(
    <RouterContextProvider router={router}>{ui}</RouterContextProvider>,
  )
}
