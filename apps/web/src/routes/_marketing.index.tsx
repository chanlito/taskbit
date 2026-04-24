import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  GitPullRequestArrow,
  MonitorDown,
  Route as RouteIcon,
} from 'lucide-react'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'
import { getDocumentTitle } from '#/utils/document-title'

const workflowColumns = [
  {
    title: 'Triage',
    label: 'Signals',
    status: 'Needs order',
    items: [
      `Map GitHub issue labels into ${appConfig.title} priorities.`,
      'Group billing bug reports by customer impact.',
    ],
  },
  {
    title: 'Decision',
    label: 'Scope',
    status: 'Owner set',
    items: [
      'Review API integration checklist with platform team.',
      'Confirm dashboard empty-state copy with design.',
    ],
  },
  {
    title: 'Ship',
    label: 'Release',
    status: 'Ready check',
    items: [
      'Run release readiness check for desktop build.',
      'Attach product feedback notes to sprint review.',
    ],
  },
]

const productPaths = [
  {
    title: 'Intake',
    description: 'Collect issue, feedback, and release signals before they become scattered.',
    icon: CircleDot,
    proof: 'Single source for what needs attention.',
  },
  {
    title: 'Shape',
    description: 'Turn raw signals into scoped work with clear owners and delivery context.',
    icon: RouteIcon,
    proof: 'A planning surface for product and engineering.',
  },
  {
    title: 'Return',
    description: `Keep ${appConfig.title} close by through the web app and desktop shell.`,
    icon: MonitorDown,
    proof: 'Useful when work shifts between browser and desktop.',
  },
]

const operatingLoop = ['Capture', 'Clarify', 'Release']
const surfaceClassName = 'border-border bg-[oklch(0.994_0.003_326)]'
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
    <div className="space-y-16 sm:space-y-20">
      <section className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_480px] xl:items-center xl:gap-16">
        <div className="space-y-9">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${surfaceClassName} ${mutedTextClassName}`}
          >
            <GitPullRequestArrow aria-hidden="true" className="size-4" />
            <span className="tracking-[0.14em] uppercase">Product delivery desk</span>
          </div>
          <div className="max-w-3xl space-y-5">
            <h1
              className={`text-5xl leading-[1.05] font-semibold sm:text-6xl ${foregroundTextClassName}`}
            >
              Turn scattered product work into a clear path to ship.
            </h1>
            <p className={`max-w-2xl text-lg leading-8 ${bodyTextClassName}`}>
              {appConfig.title} gives product and developer teams a calm place to capture signals,
              shape decisions, and keep release readiness visible without pretending the sample data
              is live.
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
          <div className="grid max-w-xl grid-cols-3 gap-2 border-y border-border py-4">
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

      <section className="grid gap-8 border-y border-border py-8 lg:grid-cols-[340px_1fr] lg:items-start">
        <div className="space-y-3">
          <p className={`text-sm font-semibold tracking-[0.14em] uppercase ${mutedTextClassName}`}>
            Operating shape
          </p>
          <h2 className={`text-3xl leading-tight font-semibold ${foregroundTextClassName}`}>
            Built around the handoff from signal to shipped work.
          </h2>
          <p className={`leading-7 ${bodyTextClassName}`}>
            The public page points to the actual product direction: a focused web workspace, planned
            integrations, and desktop access for teams that want the workflow nearby.
          </p>
        </div>
        <div className="grid gap-4">
          {productPaths.map((path, index) => {
            const Icon = path.icon

            return (
              <article
                key={path.title}
                className={`grid gap-4 rounded-lg border p-5 sm:grid-cols-[120px_1fr] sm:items-start ${surfaceClassName}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-10 place-items-center rounded-md bg-muted ${primaryTextClassName}`}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className={`text-sm font-semibold ${mutedTextClassName}`}>0{index + 1}</p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${foregroundTextClassName}`}>
                    {path.title}
                  </h3>
                  <p className={`mt-2 leading-7 ${bodyTextClassName}`}>{path.description}</p>
                  <p className={`mt-3 text-sm font-semibold ${mutedTextClassName}`}>{path.proof}</p>
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
              <p className={`text-xs font-semibold ${mutedTextClassName}`}>{column.status}</p>
            </div>
            <p className={`mt-1 text-xs font-semibold ${mutedTextClassName}`}>{column.label}</p>
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
