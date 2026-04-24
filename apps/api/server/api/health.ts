import { appTitle, type HealthResponse } from '@taskbit/shared'
import { defineEventHandler } from 'h3'

export function getHealthResponse(): HealthResponse {
  return {
    service: appTitle,
    status: 'ok',
  }
}

export default defineEventHandler((): HealthResponse => getHealthResponse())
