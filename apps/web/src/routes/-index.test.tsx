// @vitest-environment jsdom

import { screen, within } from '@testing-library/react'
import { renderRoute } from 'tests/render-with-router'
import { afterEach, describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

afterEach(() => {
  document.body.replaceChildren()
})

describe('home route', () => {
  it('renders the product landing page content', async () => {
    renderRoute(['/'])

    expect(
      await screen.findByRole('heading', {
        name: 'Turn scattered product work into a clear path to ship.',
      }),
    ).toBeTruthy()
    expect(
      screen.getByText(/capture signals, shape decisions, and keep release readiness visible/i),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: `Learn about ${appConfig.title}` })).toBeTruthy()
    expect(screen.getAllByRole('link', { name: 'Open app preview' })).toHaveLength(2)
  })

  it('renders a static workflow preview and sample metrics', async () => {
    renderRoute(['/'])

    await screen.findByRole('heading', {
      name: 'Turn scattered product work into a clear path to ship.',
    })

    const preview = screen.getByTestId('workflow-preview')
    expect(within(preview).getByText('Triage')).toBeTruthy()
    expect(within(preview).getByText('Decision')).toBeTruthy()
    expect(within(preview).getByText('Ship')).toBeTruthy()
    expect(
      within(preview).getByText(`Map GitHub issue labels into ${appConfig.title} priorities.`),
    ).toBeTruthy()
    expect(screen.getByText('Operating shape')).toBeTruthy()
    expect(screen.getByText('Single source for what needs attention.')).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/'])

    await screen.findByRole('heading', {
      name: 'Turn scattered product work into a clear path to ship.',
    })

    expect(document.title).toBe(`Home · ${appConfig.title}`)
  })
})
