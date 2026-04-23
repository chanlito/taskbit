// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { renderWithRouterContext } from 'tests/render-with-router'
import { describe, expect, it } from 'vitest'

import { AppHeader } from '#/components/app-header'
import { appConfig } from '#/config'

describe('app header', () => {
  it('renders the configured title and navigation links with icons', () => {
    renderWithRouterContext(<AppHeader />)

    expect(screen.getByRole('link', { name: appConfig.title })).toBeTruthy()
    for (const navLink of appConfig.navLinks) {
      const link = screen.getByRole('link', { name: navLink.label })

      expect(link.querySelector('svg')).toBeTruthy()
    }
  })
})
