import { appConfig } from '#/config'

export function getDocumentTitle(pageTitle: string): string {
  return `${pageTitle} · ${appConfig.title}`
}
