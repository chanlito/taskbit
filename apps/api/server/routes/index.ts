import { appTitle, type IndexResponse } from '@taskbit/shared'
import { defineEventHandler } from 'h3'

export function getIndexResponse(): IndexResponse {
  return {
    service: appTitle,
    routes: ['/api/health'],
  }
}

export default defineEventHandler((): IndexResponse => getIndexResponse())
