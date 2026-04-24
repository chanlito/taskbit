import { Outlet, createFileRoute } from '@tanstack/react-router'

import { MarketingHeader } from '#/components/app-header'

export const Route = createFileRoute('/_marketing')({
  component: MarketingLayout,
})

function MarketingLayout() {
  return (
    <div className="min-h-screen bg-[oklch(0.982_0.004_326)]">
      <MarketingHeader />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14 lg:py-18">
        <Outlet />
      </main>
    </div>
  )
}
