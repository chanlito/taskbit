export const appTitle = 'Taskbit'

export type HealthResponse = {
  service: typeof appTitle
  status: 'ok'
}

export type IndexResponse = {
  service: typeof appTitle
  routes: ['/api/health']
}
