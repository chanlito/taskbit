import { createFileRoute } from '@tanstack/react-router'
import { Braces, Compass, PanelsTopLeft, PlugZap } from 'lucide-react'

import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

const productSurface = [
  {
    title: 'Signal intake',
    description: 'Issues, product feedback, release checks, and integration notes land together.',
  },
  {
    title: 'Planning surface',
    description: 'Teams sort work by impact, ownership, readiness, and delivery context.',
  },
  {
    title: 'Desktop return point',
    description: 'The Tauri shell keeps the workspace available without inventing a second app.',
  },
]

const principles = [
  {
    title: 'Make scattered work legible',
    description:
      'The interface should show how signals, tasks, decisions, and release checks relate before a team commits to execution.',
  },
  {
    title: 'Preserve honest product state',
    description:
      'Static previews can feel real, but they should never imply connected customer data or live integrations before those systems exist.',
  },
  {
    title: 'Keep momentum visible',
    description:
      'The product should make the next attention points easy to scan without making routine work feel artificially urgent.',
  },
]

const stack = [
  {
    title: 'React workspace',
    description: 'A Vite app with TanStack Router for route ownership and document metadata.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Nitro API',
    description: 'A small API foundation for health checks and future product endpoints.',
    icon: PlugZap,
  },
  {
    title: 'Desktop shell',
    description: 'A Tauri wrapper that reuses the web app instead of splitting the frontend.',
    icon: Compass,
  },
  {
    title: 'Shared contracts',
    description: 'Workspace types keep payloads aligned across app and API code.',
    icon: Braces,
  },
]

const roadmap = [
  'Shape static workspace previews into interactive planning surfaces.',
  'Explore connectors for issue, feedback, and release tools.',
  'Refine desktop app behavior for macOS and Windows workflows.',
]

const foregroundTextClassName = 'text-foreground'
const mutedTextClassName = 'text-muted-foreground'
const bodyTextClassName = 'text-[oklch(0.455_0.028_322)]'
const surfaceClassName = 'border-border bg-[oklch(0.994_0.003_326)]'

export const Route = createFileRoute('/_marketing/about')({
  head: () => ({ meta: [{ title: getDocumentTitle('About') }] }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div className="max-w-3xl space-y-5">
          <p className={`text-sm font-semibold tracking-[0.18em] uppercase ${mutedTextClassName}`}>
            {`About ${appConfig.title}`}
          </p>
          <h1 className={`text-5xl leading-tight font-semibold ${foregroundTextClassName}`}>
            A practical operating surface for product work.
          </h1>
          <p className={`text-lg leading-8 ${bodyTextClassName}`}>
            {appConfig.title} exists to reduce scattered project work and help product and developer
            teams see issues, tasks, feedback, and release readiness in one quiet workspace.
          </p>
        </div>
        <div className={`rounded-lg border p-5 ${surfaceClassName}`}>
          <p className={`text-sm font-semibold ${mutedTextClassName}`}>Current scope</p>
          <p className={`mt-3 text-2xl leading-tight font-semibold ${foregroundTextClassName}`}>
            Web workspace, Nitro API foundation, and Tauri desktop shell.
          </p>
          <p className={`mt-4 leading-7 ${bodyTextClassName}`}>
            The product is early, so the interface should show direction without overselling live
            integrations.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div>
          <p className={`text-sm font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}>
            Product surface
          </p>
          <h2 className={`mt-3 text-3xl leading-tight font-semibold ${foregroundTextClassName}`}>
            Three surfaces, one workflow.
          </h2>
        </div>
        <div className="grid gap-3">
          {productSurface.map((item, index) => (
            <article
              key={item.title}
              className={`grid gap-4 rounded-lg border p-5 sm:grid-cols-[88px_1fr] ${surfaceClassName}`}
            >
              <p className={`text-sm font-semibold ${mutedTextClassName}`}>0{index + 1}</p>
              <div>
                <h3 className={`text-xl font-semibold ${foregroundTextClassName}`}>{item.title}</h3>
                <p className={`mt-2 leading-7 ${bodyTextClassName}`}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <p
              className={`text-sm font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}
            >
              Principles
            </p>
            <h2 className={`mt-3 text-3xl leading-tight font-semibold ${foregroundTextClassName}`}>
              The product should feel calm because the work is not.
            </h2>
          </div>
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="grid gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[72px_1fr]"
              >
                <p className={`text-sm font-semibold ${mutedTextClassName}`}>0{index + 1}</p>
                <div>
                  <h3 className={`text-xl font-semibold ${foregroundTextClassName}`}>
                    {principle.title}
                  </h3>
                  <p className={`mt-2 leading-7 ${bodyTextClassName}`}>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className={`text-3xl leading-tight font-semibold ${foregroundTextClassName}`}>
            Built as one product, not three disconnected demos.
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {stack.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className={`rounded-lg border p-5 ${surfaceClassName}`}>
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  <h3 className={`mt-4 font-semibold ${foregroundTextClassName}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${bodyTextClassName}`}>
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
        <aside className={`rounded-lg border p-5 ${surfaceClassName}`}>
          <h2 className={`text-2xl font-semibold ${foregroundTextClassName}`}>Roadmap direction</h2>
          <ul className="mt-5 space-y-4">
            {roadmap.map((item) => (
              <li key={item} className="flex gap-3">
                <ListMarker />
                <span className={`leading-7 ${bodyTextClassName}`}>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  )
}

function ListMarker() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 block size-2 shrink-0 rounded-full bg-[oklch(0.596_0.145_163.225)]"
    />
  )
}
