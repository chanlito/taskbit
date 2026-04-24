import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Blocks, CheckCircle2, CloudCog, MonitorDown } from 'lucide-react'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

const workflowColumns = [
  {
    title: 'Triage',
    items: [
      `Map GitHub issue labels into ${appConfig.title} priorities`,
      'Group billing bug reports by customer impact',
    ],
  },
  {
    title: 'In Progress',
    items: [
      'Review API integration checklist with platform team',
      'Confirm dashboard empty-state copy with design',
    ],
  },
  {
    title: 'Ready to Ship',
    items: [
      'Run release readiness check for desktop build',
      'Attach product feedback notes to sprint review',
    ],
  },
]

const features = [
  {
    title: 'API integrations',
    description:
      'Bring work signals from issue trackers, feedback channels, and release tools into one planning surface.',
    icon: CloudCog,
  },
  {
    title: 'Web workspace',
    description: 'Plan, prioritize, and review team execution from a focused browser workspace.',
    icon: Blocks,
  },
  {
    title: 'Desktop apps',
    description: `Keep ${appConfig.title} close at hand with planned desktop shells for macOS and Windows.`,
    icon: MonitorDown,
  },
]

const metrics = ['12 connected signals', '38 sample work items', '6 release checks']

export const Route = createFileRoute('/_marketing/')({
  head: () => ({
    meta: [{ title: getDocumentTitle('Home') }],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-center">
        <div className="space-y-7">
          <p className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Workflow hub for product teams
          </p>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl leading-tight font-semibold text-slate-950 sm:text-6xl">
              Turn scattered product work into one clear workflow.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Capture issues, tasks, release checks, and product feedback in a workspace built for
              developer and product teams moving from signal to shipped work.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/app">
                Open app preview
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">{`Learn about ${appConfig.title}`}</Link>
            </Button>
          </div>
        </div>
        <WorkflowPreview />
      </section>

      <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-3">
        <p className="text-sm font-semibold text-slate-500">Sample workspace snapshot</p>
        {metrics.map((metric) => (
          <p key={metric} className="text-lg font-semibold text-slate-950">
            {metric}
          </p>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <article
              key={feature.title}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <Icon aria-hidden="true" className="mb-5 size-6 text-slate-500" />
              <h2 className="text-xl font-semibold text-slate-950">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </article>
          )
        })}
      </section>
    </div>
  )
}

function WorkflowPreview() {
  return (
    <section
      data-testid="workflow-preview"
      aria-label="Static workflow preview"
      className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Release planning board</h2>
          <p className="text-sm text-slate-500">Static sample content</p>
        </div>
        <CheckCircle2 aria-hidden="true" className="size-5 text-emerald-600" />
      </div>
      <div className="grid gap-3">
        {workflowColumns.map((column) => (
          <div key={column.title} className="rounded-md bg-slate-50 p-3">
            <h3 className="text-sm font-semibold text-slate-700">{column.title}</h3>
            <div className="mt-3 space-y-2">
              {column.items.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
