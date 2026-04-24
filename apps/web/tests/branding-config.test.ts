import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const workspaceRoot = path.resolve(appRoot, '../..')

async function readAppFile(relativePath: string): Promise<string> {
  return readFile(path.join(appRoot, relativePath), 'utf8')
}

async function readWorkspaceFile(relativePath: string): Promise<string> {
  return readFile(path.join(workspaceRoot, relativePath), 'utf8')
}

describe('branding config', () => {
  it('keeps app code free of hard-coded app-title strings', async () => {
    const brandedFiles = await Promise.all([
      readAppFile('src/components/app-header.tsx'),
      readAppFile('src/routes/index.tsx'),
      readAppFile('src/routes/about.tsx'),
    ])

    for (const contents of brandedFiles) {
      expect(contents).not.toMatch(/\bTaskbit\b/)
    }
  })

  it('keeps app header navigation labels in app config', async () => {
    const appHeader = await readAppFile('src/components/app-header.tsx')
    const config = await readAppFile('src/config.ts')

    expect(appHeader).toContain('appConfig.navLinks')
    expect(appHeader).not.toMatch(/\bHome\b/)
    expect(appHeader).not.toMatch(/\bAbout\b/)
    expect(config).toContain('icon:')
    expect(config).not.toContain("icon: '💼'")
  })

  it('keeps the static fallback title aligned with app config', async () => {
    const indexHtml = await readAppFile('index.html')

    expect(indexHtml).toContain(`<title>${appConfig.title}</title>`)
  })

  it('uses the configured app title in the README heading and intro', async () => {
    const readme = await readWorkspaceFile('README.md')

    expect(readme).toContain(`# ${appConfig.title}`)
    expect(readme).toContain(`${appConfig.title} is a pnpm workspace monorepo`)
  })
})
