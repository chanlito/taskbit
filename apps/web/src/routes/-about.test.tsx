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
        name: 'A practical operating surface for product work.',
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
      name: 'A practical operating surface for product work.',
    })

    expect(screen.getByText('Product surface')).toBeTruthy()
    expect(screen.getByText('Signal intake')).toBeTruthy()
    expect(screen.getByText('Planning surface')).toBeTruthy()
    expect(screen.getByText('Desktop return point')).toBeTruthy()
    expect(screen.getByText('Make scattered work legible')).toBeTruthy()
    expect(screen.getByText('Preserve honest product state')).toBeTruthy()
    expect(screen.getByText('Keep momentum visible')).toBeTruthy()
    expect(screen.getByText('React workspace')).toBeTruthy()
    expect(
      screen.getByText('Explore connectors for issue, feedback, and release tools.'),
    ).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/about'])

    await screen.findByRole('heading', {
      name: 'A practical operating surface for product work.',
    })

    expect(document.title).toBe(`About · ${appConfig.title}`)
  })
})
