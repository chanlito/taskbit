// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { renderRoute } from 'tests/render-with-router'
import { describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

describe('home route', () => {
  it('renders the welcome content', async () => {
    renderRoute(['/'])

    expect(
      await screen.findByRole('heading', {
        name: `${appConfig.title} keeps the starter app ready for real work.`,
      }),
    ).toBeTruthy()
    expect(screen.getByText(/defined directly in the route file/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'About' })).toBeTruthy()
  })

  it('sets the document title', async () => {
    renderRoute(['/'])

    await screen.findByRole('heading', {
      name: `${appConfig.title} keeps the starter app ready for real work.`,
    })

    expect(document.title).toBe(`Home · ${appConfig.title}`)
  })
})
