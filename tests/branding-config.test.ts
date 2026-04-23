import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { appConfig } from '#/config'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

async function readRepoFile(relativePath: string): Promise<string> {
  return readFile(path.join(repoRoot, relativePath), 'utf8')
}

describe('branding config', () => {
  it('keeps app code free of hard-coded app-title strings', async () => {
    const brandedFiles = await Promise.all([
      readRepoFile('src/components/app-header.tsx'),
      readRepoFile('src/routes/index.tsx'),
      readRepoFile('src/routes/about.tsx'),
    ])

    for (const contents of brandedFiles) {
      expect(contents).not.toMatch(/\bTaskbit\b/)
    }
  })

  it('keeps app header navigation labels in app config', async () => {
    const appHeader = await readRepoFile('src/components/app-header.tsx')
    const config = await readRepoFile('src/config.ts')

    expect(appHeader).toContain('appConfig.navLinks')
    expect(appHeader).not.toMatch(/\bHome\b/)
    expect(appHeader).not.toMatch(/\bAbout\b/)
    expect(config).toContain('icon:')
    expect(config).not.toContain("icon: '💼'")
  })

  it('keeps the static fallback title aligned with app config', async () => {
    const indexHtml = await readRepoFile('index.html')

    expect(indexHtml).toContain(`<title>${appConfig.title}</title>`)
  })

  it('uses the configured app title in the README heading and intro', async () => {
    const readme = await readRepoFile('README.md')

    expect(readme).toContain(`# 💼 ${appConfig.title}`)
    expect(readme).toContain(`${appConfig.title} is a minimal TanStack Start app`)
  })
})
