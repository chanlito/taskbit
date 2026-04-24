import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  CloudCog,
  GitPullRequestArrow,
  MonitorDown,
} from 'lucide-react'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

const workflowColumns = [
  {
    title: 'Triage',
    label: 'Signals',
    items: [
      `Map GitHub issue labels into ${appConfig.title} priorities`,
      'Group billing bug reports by customer impact',
    ],
  },
  {
    title: 'In Progress',
    label: 'Delivery',
    items: [
      'Review API integration checklist with platform team',
      'Confirm dashboard empty-state copy with design',
    ],
  },
  {
    title: 'Ready to Ship',
    label: 'Release',
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
    detail: 'Signal intake',
  },
  {
    title: 'Web workspace',
    description: 'Plan, prioritize, and review team execution from a focused browser workspace.',
    icon: Blocks,
    detail: 'Team planning',
  },
  {
    title: 'Desktop apps',
    description: `Keep ${appConfig.title} close at hand with planned desktop shells for macOS and Windows.`,
    icon: MonitorDown,
    detail: 'Close at hand',
  },
]

const metrics = ['12 connected signals', '38 sample work items', '6 release checks']
const operatingLoop = ['Capture', 'Sort', 'Ship']

export const Route = createFileRoute('/_marketing/')({
  head: () => ({
    meta: [{ title: getDocumentTitle('Home') }],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-14 sm:space-y-18">
      <section className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_460px] xl:items-center xl:gap-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)] px-3 py-1.5 text-sm font-semibold text-[oklch(0.542_0.034_322.5)]">
            <GitPullRequestArrow aria-hidden="true" className="size-4" />
            <span className="tracking-[0.14em] uppercase">Workflow hub for product teams</span>
          </div>
          <div className="max-w-3xl space-y-5">
            <h1 className="text-5xl leading-[1.05] font-semibold text-[oklch(0.145_0.008_326)] sm:text-6xl">
              Turn scattered product work into one clear workflow.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[oklch(0.455_0.028_322)]">
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
          <div className="grid max-w-xl grid-cols-3 gap-2 border-y border-[oklch(0.922_0.005_325.62)] py-3">
            {operatingLoop.map((step, index) => (
              <div key={step}>
                <p className="text-xs font-semibold tracking-[0.14em] text-[oklch(0.542_0.034_322.5)] uppercase">
                  0{index + 1}
                </p>
                <p className="mt-1 font-semibold text-[oklch(0.212_0.019_322.12)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <WorkflowPreview />
      </section>

      <section className="grid gap-5 rounded-lg border border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)] p-5 sm:grid-cols-[1.2fr_repeat(3,1fr)] sm:items-center">
        <div>
          <p className="text-sm font-semibold text-[oklch(0.542_0.034_322.5)]">
            Sample workspace snapshot
          </p>
          <p className="mt-1 text-sm text-[oklch(0.455_0.028_322)]">
            Non-live values used to frame the product direction.
          </p>
        </div>
        {metrics.map((metric) => (
          <p key={metric} className="text-lg font-semibold text-[oklch(0.212_0.019_322.12)]">
            {metric}
          </p>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.14em] text-[oklch(0.542_0.034_322.5)] uppercase">
            Product surface
          </p>
          <h2 className="text-3xl leading-tight font-semibold text-[oklch(0.145_0.008_326)]">
            One workflow, three practical entry points.
          </h2>
          <p className="leading-7 text-[oklch(0.455_0.028_322)]">
            The marketing page should point at the real operating shape: integrations for signals, a
            focused web workspace, and desktop access when teams want it nearby.
          </p>
        </div>
        <div className="grid gap-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="grid gap-4 rounded-lg border border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)] p-5 sm:grid-cols-[180px_1fr] sm:items-start"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-md bg-[oklch(0.96_0.003_325.6)] text-[oklch(0.212_0.019_322.12)]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="text-sm font-semibold text-[oklch(0.542_0.034_322.5)]">
                    {feature.detail}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[oklch(0.145_0.008_326)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[oklch(0.455_0.028_322)]">
                    {feature.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function WorkflowPreview() {
  return (
    <section
      data-testid="workflow-preview"
      aria-label="Static workflow preview"
      className="rounded-lg border border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)] p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between border-b border-[oklch(0.922_0.005_325.62)] pb-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-[oklch(0.542_0.034_322.5)] uppercase">
            Static sample
          </p>
          <h2 className="mt-1 text-base font-semibold text-[oklch(0.145_0.008_326)]">
            Release planning board
          </h2>
        </div>
        <CheckCircle2 aria-hidden="true" className="size-5 text-[oklch(0.596_0.145_163.225)]" />
      </div>
      <div className="grid gap-3">
        {workflowColumns.map((column) => (
          <div key={column.title} className="rounded-md bg-[oklch(0.96_0.003_325.6)] p-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-[oklch(0.212_0.019_322.12)]">
                {column.title}
              </h3>
              <p className="text-xs font-semibold text-[oklch(0.542_0.034_322.5)]">
                {column.label}
              </p>
            </div>
            <div className="mt-3 space-y-2">
              {column.items.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)] p-3 text-sm text-[oklch(0.455_0.028_322)]"
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
