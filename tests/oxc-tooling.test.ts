import { spawnSync } from 'node:child_process'
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it } from 'vitest'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const tempDirs: string[] = []

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { force: true, recursive: true })))
})

function runCommand(cwd: string, args: string[]) {
  return spawnSync(npmCommand, args, {
    cwd,
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${path.join(repoRoot, 'node_modules', '.bin')}:${process.env.PATH ?? ''}`,
    },
  })
}

describe('oxc tooling', () => {
  it('rejects unsorted imports and rewrites them into the configured order', async () => {
    const tempDir = await mkdtemp(path.join(tmpdir(), 'taskbit-oxc-'))
    tempDirs.push(tempDir)

    await cp(path.join(repoRoot, '.oxfmtrc.json'), path.join(tempDir, '.oxfmtrc.json'))
    await cp(path.join(repoRoot, '.oxlintrc.json'), path.join(tempDir, '.oxlintrc.json'))
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify(
        {
          private: true,
          type: 'module',
          scripts: {
            lint: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxlint'))}`,
            format: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxfmt'))} --check .`,
            check: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxfmt'))} . && ${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxlint'))} --fix`,
          },
        },
        null,
        2,
      ),
    )

    await writeFile(path.join(tempDir, 'side-effect.ts'), 'export const sideEffect = true\n')
    await writeFile(
      path.join(tempDir, 'relative.ts'),
      "export type RelativeThing = { label: string }\nexport const localValue = 'relative'\n",
    )
    await writeFile(
      path.join(tempDir, 'fixture.ts'),
      [
        "import type { RelativeThing } from './relative'",
        "import './side-effect'",
        "import { localValue } from './relative'",
        "import type { AliasThing } from '#/alias'",
        "import { createRouter } from '@tanstack/react-router'",
        "import { aliasValue } from '#/alias'",
        '',
        'export const demo = [createRouter, aliasValue, localValue] as const',
        'export type Demo = AliasThing | RelativeThing',
        '',
      ].join('\n'),
    )

    const formatFailure = runCommand(tempDir, ['run', 'format'])
    expect(formatFailure.status).not.toBe(0)
    expect(formatFailure.stdout).toContain('Format issues found')

    const checkSuccess = runCommand(tempDir, ['run', 'check'])
    expect(checkSuccess.status).toBe(0)

    const fixtureContents = await readFile(path.join(tempDir, 'fixture.ts'), 'utf8')
    expect(fixtureContents).toBe(
      [
        "import './side-effect'",
        '',
        "import { createRouter } from '@tanstack/react-router'",
        '',
        "import { aliasValue } from '#/alias'",
        "import type { AliasThing } from '#/alias'",
        '',
        "import { localValue } from './relative'",
        "import type { RelativeThing } from './relative'",
        '',
        'export const demo = [createRouter, aliasValue, localValue] as const',
        'export type Demo = AliasThing | RelativeThing',
        '',
      ].join('\n'),
    )

    const formatSuccess = runCommand(tempDir, ['run', 'format'])
    expect(formatSuccess.status).toBe(0)

    const lintSuccess = runCommand(tempDir, ['run', 'lint'])
    expect(lintSuccess.status).toBe(0)
  })

  it('rejects unsorted Tailwind classes and rewrites them into the configured order', async () => {
    const tempDir = await mkdtemp(path.join(tmpdir(), 'taskbit-oxc-'))
    tempDirs.push(tempDir)

    await cp(path.join(repoRoot, '.oxfmtrc.json'), path.join(tempDir, '.oxfmtrc.json'))
    await cp(path.join(repoRoot, '.oxlintrc.json'), path.join(tempDir, '.oxlintrc.json'))
    await writeFile(
      path.join(tempDir, 'package.json'),
      JSON.stringify(
        {
          private: true,
          type: 'module',
          scripts: {
            lint: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxlint'))}`,
            format: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxfmt'))} --check .`,
            check: `${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxfmt'))} . && ${JSON.stringify(path.join(repoRoot, 'node_modules', '.bin', 'oxlint'))} --fix`,
          },
        },
        null,
        2,
      ),
    )

    await mkdir(path.join(tempDir, 'src'), { recursive: true })
    await writeFile(path.join(tempDir, 'src', 'styles.css'), "@import 'tailwindcss';\n")
    await writeFile(
      path.join(tempDir, 'fixture.tsx'),
      [
        'export function Demo() {',
        '  return <div className="font-medium py-1.5 rounded-full text-sm px-3">Hello</div>',
        '}',
        '',
      ].join('\n'),
    )

    const formatFailure = runCommand(tempDir, ['run', 'format'])
    expect(formatFailure.status).not.toBe(0)
    expect(formatFailure.stdout).toContain('Format issues found')

    const checkSuccess = runCommand(tempDir, ['run', 'check'])
    expect(checkSuccess.status).toBe(0)

    const fixtureContents = await readFile(path.join(tempDir, 'fixture.tsx'), 'utf8')
    expect(fixtureContents).toBe(
      [
        'export function Demo() {',
        '  return <div className="rounded-full px-3 py-1.5 text-sm font-medium">Hello</div>',
        '}',
        '',
      ].join('\n'),
    )

    const formatSuccess = runCommand(tempDir, ['run', 'format'])
    expect(formatSuccess.status).toBe(0)
  })
})
