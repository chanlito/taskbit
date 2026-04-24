import { appTitle, type IndexResponse } from '@taskbit/shared'
import { describe, expect, it } from 'vitest'

import { getIndexResponse } from './index'

describe('GET /', () => {
  it('returns the shared API index response contract', () => {
    const response = getIndexResponse() satisfies IndexResponse

    expect(response).toEqual({
      service: appTitle,
      routes: ['/api/health'],
    })
  })
})
