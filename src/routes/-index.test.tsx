// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HomePage } from '#/components/home-page'

describe('home route', () => {
  it('renders the welcome content', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: 'Welcome to TanStack Start' }),
    ).toBeTruthy()
    expect(
      screen.getByText(/Edit/, {
        selector: 'p',
      }),
    ).toBeTruthy()
  })
})
