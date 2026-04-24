import { createFileRoute } from '@tanstack/react-router'

import { getDocumentTitle } from '#/utils/document-title'

const workflow = [
  {
    title: 'Triage',
    items: ['Review webhook retry failures', 'Sort feedback from beta workspace'],
  },
  {
    title: 'In Progress',
    items: [
      'Draft release checklist for desktop install',
      'Connect API contract review to sprint plan',
    ],
  },
  { title: 'Ready', items: ['Confirm Windows packaging notes', 'Approve empty-state copy'] },
]
const signals = ['3 issue updates', '2 release checks', '5 feedback notes']

export const Route = createFileRoute('/_app/app')({
  head: () => ({ meta: [{ title: getDocumentTitle('App') }] }),
  component: AppPage,
})

function AppPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Platform Team
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Product workspace</h1>
            <p className="mt-2 text-slate-600">
              Static workspace preview for integration signals, issue work, bugs, and release
              checks.
            </p>
          </div>
          <p className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
            Static sample data
          </p>
        </div>
      </section>
      <section className="grid gap-4 xl:grid-cols-[1fr_280px]">
        <div className="grid gap-4 xl:grid-cols-3">
          {workflow.map((column) => (
            <article key={column.title} className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="font-semibold text-slate-950">{column.title}</h2>
              <div className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <aside className="rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="font-semibold text-slate-950">Integration signals</h2>
          <div className="mt-4 space-y-3">
            {signals.map((signal) => (
              <p key={signal} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {signal}
              </p>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}
