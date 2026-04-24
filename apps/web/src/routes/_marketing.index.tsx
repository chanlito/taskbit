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
const surfaceClassName = 'border-border bg-background'
const foregroundTextClassName = 'text-foreground'
const primaryTextClassName = 'text-primary'
const mutedTextClassName = 'text-muted-foreground'
const bodyTextClassName = 'text-[oklch(0.455_0.028_322)]'

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
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${surfaceClassName} ${mutedTextClassName}`}
          >
            <GitPullRequestArrow aria-hidden="true" className="size-4" />
            <span className="tracking-[0.14em] uppercase">Workflow hub for product teams</span>
          </div>
          <div className="max-w-3xl space-y-5">
            <h1
              className={`text-5xl leading-[1.05] font-semibold sm:text-6xl ${foregroundTextClassName}`}
            >
              Turn scattered product work into one clear workflow.
            </h1>
            <p className={`max-w-2xl text-lg leading-8 ${bodyTextClassName}`}>
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
          <div className="grid max-w-xl grid-cols-3 gap-2 border-y border-border py-3">
            {operatingLoop.map((step, index) => (
              <div key={step}>
                <p
                  className={`text-xs font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}
                >
                  0{index + 1}
                </p>
                <p className={`mt-1 font-semibold ${primaryTextClassName}`}>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <WorkflowPreview />
      </section>

      <section
        className={`grid gap-5 rounded-lg border p-5 sm:grid-cols-[1.2fr_repeat(3,1fr)] sm:items-center ${surfaceClassName}`}
      >
        <div>
          <p className={`text-sm font-semibold ${mutedTextClassName}`}>Sample workspace snapshot</p>
          <p className={`mt-1 text-sm ${bodyTextClassName}`}>
            Non-live values used to frame the product direction.
          </p>
        </div>
        {metrics.map((metric) => (
          <p key={metric} className={`text-lg font-semibold ${primaryTextClassName}`}>
            {metric}
          </p>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <div className="space-y-3">
          <p className={`text-sm font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}>
            Product surface
          </p>
          <h2 className={`text-3xl leading-tight font-semibold ${foregroundTextClassName}`}>
            One workflow, three practical entry points.
          </h2>
          <p className={`leading-7 ${bodyTextClassName}`}>
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
                className={`grid gap-4 rounded-lg border p-5 sm:grid-cols-[180px_1fr] sm:items-start ${surfaceClassName}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-10 place-items-center rounded-md bg-muted ${primaryTextClassName}`}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className={`text-sm font-semibold ${mutedTextClassName}`}>{feature.detail}</p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${foregroundTextClassName}`}>
                    {feature.title}
                  </h3>
                  <p className={`mt-2 leading-7 ${bodyTextClassName}`}>{feature.description}</p>
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
      className={`rounded-lg border p-4 shadow-sm ${surfaceClassName}`}
    >
      <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}>
            Static sample
          </p>
          <h2 className={`mt-1 text-base font-semibold ${foregroundTextClassName}`}>
            Release planning board
          </h2>
        </div>
        <CheckCircle2 aria-hidden="true" className="size-5 text-[oklch(0.596_0.145_163.225)]" />
      </div>
      <div className="grid gap-3">
        {workflowColumns.map((column) => (
          <div key={column.title} className="rounded-md bg-muted p-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className={`text-sm font-semibold ${primaryTextClassName}`}>{column.title}</h3>
              <p className={`text-xs font-semibold ${mutedTextClassName}`}>{column.label}</p>
            </div>
            <div className="mt-3 space-y-2">
              {column.items.map((item) => (
                <div
                  key={item}
                  className={`rounded-md border p-3 text-sm ${surfaceClassName} ${bodyTextClassName}`}
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
