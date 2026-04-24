import { createFileRoute } from '@tanstack/react-router'

import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

const productSurface = ['API integrations', 'Web app', 'Desktop apps for macOS and Windows']
const principles = [
  {
    title: 'Clarity',
    description:
      'Work should be easy to see, group, and reason about before a team commits to execution.',
  },
  {
    title: 'Momentum',
    description:
      'Teams should understand what needs attention next without chasing updates across tools.',
  },
  {
    title: 'Traceability',
    description: 'Decisions, tasks, release checks, and product feedback should stay connected.',
  },
]
const stack = [
  'React',
  'TanStack Router',
  'Nitro API',
  'Tauri desktop shell',
  'Shared TypeScript contracts',
  'shadcn UI',
]
const roadmap = [
  'Shape static workspace previews into interactive planning surfaces.',
  'Explore connectors for issue, feedback, and release tools.',
  'Refine desktop app behavior for macOS and Windows workflows.',
]

export const Route = createFileRoute('/_marketing/about')({
  head: () => ({ meta: [{ title: getDocumentTitle('About') }] }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">{`About ${appConfig.title}`}</p>
        <h1 className="text-5xl leading-tight font-semibold text-slate-950">
          A clearer operating surface for product work.
        </h1>
        <p className="text-lg leading-8 text-slate-600">
          {appConfig.title} exists to reduce scattered project work and help product and developer
          teams see issues, tasks, feedback, and release readiness in one practical workspace.
        </p>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-950">Product surface</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {productSurface.map((item) => (
            <div
              key={item}
              className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Principles</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-950">{principle.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Roadmap direction</h2>
          <ul className="mt-5 space-y-3 text-slate-600">
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
