// @vitest-environment jsdom

import { screen, within } from '@testing-library/react'
import { renderRoute } from 'tests/render-with-router'
import { afterEach, describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

afterEach(() => {
  document.body.replaceChildren()
})

describe('app route', () => {
  it('renders the product workspace preview content', async () => {
    renderRoute(['/app'])

    expect(
      await screen.findByRole('heading', {
        name: 'Product workspace',
      }),
    ).toBeTruthy()
    expect(screen.getByText('Platform Team')).toBeTruthy()
    expect(screen.getByText(/Static workspace preview/i)).toBeTruthy()
    expect(screen.getByText('Integration signals')).toBeTruthy()
  })

  it('renders app navigation without marketing links', async () => {
    renderRoute(['/app'])

    await screen.findByRole('heading', {
      name: 'Product workspace',
    })

    const appShell = screen.getByTestId('app-shell')
    expect(within(appShell).queryByRole('link', { name: 'Home' })).toBeNull()
    expect(within(appShell).queryByRole('link', { name: 'About' })).toBeNull()

    const workspaceLink = within(appShell).getByRole('link', { name: 'Workspace' })
    expect(workspaceLink.getAttribute('href')).toBe('/app')
  })

  it('sets the document title', async () => {
    renderRoute(['/app'])

    await screen.findByRole('heading', {
      name: 'Product workspace',
    })

    expect(document.title).toBe(`App · ${appConfig.title}`)
  })
})
