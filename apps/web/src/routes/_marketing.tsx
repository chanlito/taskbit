import { Outlet, createFileRoute } from '@tanstack/react-router'

import { MarketingHeader } from '#/components/app-header'

export const Route = createFileRoute('/_marketing')({
  component: MarketingLayout,
})

function MarketingLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Outlet />
      </main>
    </div>
  )
}
