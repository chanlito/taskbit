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
        name: 'Turn scattered product work into one clear workflow.',
      }),
    ).toBeTruthy()
    expect(
      screen.getByText(/Capture issues, tasks, release checks, and product feedback/i),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: `Learn about ${appConfig.title}` })).toBeTruthy()
    expect(screen.getAllByRole('link', { name: 'Open app preview' })).toHaveLength(2)
  })

  it('renders a static workflow preview and sample metrics', async () => {
    renderRoute(['/'])

    await screen.findByRole('heading', {
      name: 'Turn scattered product work into one clear workflow.',
    })

    const preview = screen.getByTestId('workflow-preview')
    expect(within(preview).getByText('Triage')).toBeTruthy()
    expect(within(preview).getByText('In Progress')).toBeTruthy()
    expect(within(preview).getByText('Ready to Ship')).toBeTruthy()
    expect(
      within(preview).getByText(`Map GitHub issue labels into ${appConfig.title} priorities`),
    ).toBeTruthy()
    expect(screen.getByText('Sample workspace snapshot')).toBeTruthy()
    expect(screen.getByText('12 connected signals')).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/'])

    await screen.findByRole('heading', {
      name: 'Turn scattered product work into one clear workflow.',
    })

    expect(document.title).toBe(`Home · ${appConfig.title}`)
  })
})
