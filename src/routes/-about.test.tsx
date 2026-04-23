// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderRoute } from '#/test/router-test-utils'

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
})
