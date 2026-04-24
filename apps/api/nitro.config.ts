import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  compatibilityDate: '2026-04-24',
  ignore: ['api/**/*.test.ts', 'routes/**/*.test.ts'],
  srcDir: './server',
})
