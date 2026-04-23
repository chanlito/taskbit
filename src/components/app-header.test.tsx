// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { AppHeader } from '#/components/app-header'
import { renderWithRouterContext } from '#/test/router-test-utils'

describe('app header', () => {
  it('renders navigation links for home and about', () => {
    renderWithRouterContext(<AppHeader />)

    expect(screen.getByRole('link', { name: 'Taskbit' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'About' })).toBeTruthy()
  })
})
