import { describe, expect, it } from 'vitest'

import { appTitle, type HealthResponse, type IndexResponse } from './index'

describe('shared contract', () => {
  it('exports the app title used by workspace packages', () => {
    expect(appTitle).toBe('Taskbit')
  })

  it('describes the API health response payload', () => {
    const response: HealthResponse = {
      service: appTitle,
      status: 'ok',
    }

    expect(response).toEqual({
      service: 'Taskbit',
      status: 'ok',
    })
  })

  it('describes the API index response payload', () => {
    const response: IndexResponse = {
      service: appTitle,
      routes: ['/api/health'],
    }

    expect(response).toEqual({
      service: 'Taskbit',
      routes: ['/api/health'],
    })
  })
})
