import { appTitle, type HealthResponse } from '@taskbit/shared'
import { describe, expect, it } from 'vitest'

import { getHealthResponse } from './health'

describe('GET /api/health', () => {
  it('returns the shared health response contract', async () => {
    const response = getHealthResponse() satisfies HealthResponse

    expect(response).toEqual({
      service: appTitle,
      status: 'ok',
    })
  })
})
