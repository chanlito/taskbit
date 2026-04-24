// @vitest-environment jsdom

import { screen } from '@testing-library/react'
import { renderWithRouterContext } from 'tests/render-with-router'
import { describe, expect, it } from 'vitest'

import { MarketingHeader } from '#/components/app-header'
import { appConfig } from '#/config'

describe('marketing header', () => {
  it('renders the configured title and public navigation links with icons', () => {
    renderWithRouterContext(<MarketingHeader />)

    expect(screen.getByRole('link', { name: appConfig.title })).toBeTruthy()
    for (const navLink of appConfig.marketingNavLinks) {
      const link = screen.getByRole('link', { name: navLink.label })

      expect(link.querySelector('svg')).toBeTruthy()
    }
  })

  it('keeps app workspace navigation out of the marketing header', () => {
    renderWithRouterContext(<MarketingHeader />)

    expect(screen.queryByRole('link', { name: 'Workspace' })).toBeNull()
  })
})
