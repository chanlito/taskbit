// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderRoute } from '#/test/router-test-utils'

describe('home route', () => {
  it('renders the welcome content', async () => {
    renderRoute(['/'])

    expect(
      await screen.findByRole('heading', {
        name: 'Taskbit keeps the starter app ready for real work.',
      }),
    ).toBeTruthy()
    expect(screen.getByText(/defined directly in the route file/i)).toBeTruthy()
    expect(screen.getByRole('link', { name: 'About' })).toBeTruthy()
  })
})
