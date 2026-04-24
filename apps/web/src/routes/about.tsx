import { createFileRoute } from '@tanstack/react-router'

import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: getDocumentTitle('About') }],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <section className="space-y-4">
      <p className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
        {`About ${appConfig.title}`}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        A small TanStack Router app with room to grow.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        {appConfig.title} is set up as a lightweight starting point for building features with
        file-based routes, shared components, and a clean React structure.
      </p>
      <p className="max-w-2xl text-base leading-7 text-slate-600">
        This page is intentionally simple. It gives the app a second route and a place to explain
        the project without adding a larger layout or content system yet.
      </p>
    </section>
  )
}
