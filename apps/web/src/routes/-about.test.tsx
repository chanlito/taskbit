// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { renderRoute } from 'tests/render-with-router'
import { describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

describe('about route', () => {
  it('renders the project introduction content', async () => {
    renderRoute(['/about'])

    expect(
      await screen.findByRole('heading', {
        name: 'A small TanStack Router app with room to grow.',
      }),
    ).toBeTruthy()
    expect(screen.getByText(/file-based routes/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/about'])

    await screen.findByRole('heading', {
      name: 'A small TanStack Router app with room to grow.',
    })

    expect(document.title).toBe(`About · ${appConfig.title}`)
  })
})
