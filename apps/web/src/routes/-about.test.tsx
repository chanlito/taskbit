// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { renderRoute } from 'tests/render-with-router'
import { afterEach, describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

afterEach(() => {
  document.body.replaceChildren()
})

describe('about route', () => {
  it('renders the marketing about page content', async () => {
    renderRoute(['/about'])

    expect(
      await screen.findByRole('heading', {
        name: 'A clearer operating surface for product work.',
      }),
    ).toBeTruthy()
    expect(
      screen.getByText(/product and developer teams see issues, tasks, feedback/i),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
  })

  it('renders product principles, stack, and roadmap direction', async () => {
    renderRoute(['/about'])

    await screen.findByRole('heading', {
      name: 'A clearer operating surface for product work.',
    })

    expect(screen.getByText('Product surface')).toBeTruthy()
    expect(screen.getByText('API integrations')).toBeTruthy()
    expect(screen.getByText('Web app')).toBeTruthy()
    expect(screen.getByText('Desktop apps for macOS and Windows')).toBeTruthy()
    expect(screen.getByText('Clarity')).toBeTruthy()
    expect(screen.getByText('Momentum')).toBeTruthy()
    expect(screen.getByText('Traceability')).toBeTruthy()
    expect(screen.getByText('TanStack Router')).toBeTruthy()
    expect(
      screen.getByText('Explore connectors for issue, feedback, and release tools.'),
    ).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/about'])

    await screen.findByRole('heading', {
      name: 'A clearer operating surface for product work.',
    })

    expect(document.title).toBe(`About · ${appConfig.title}`)
  })
})
