import { Outlet, createFileRoute } from '@tanstack/react-router'

import { appConfig } from '#/config'

export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

function AppLayout() {
  return (
    <div data-testid="app-shell" className="min-h-screen bg-slate-100 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-slate-200 bg-white px-5 py-4 lg:border-r lg:border-b-0">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white">
              Tb
            </span>
            <div>
              <p className="text-sm font-semibold">{appConfig.title}</p>
              <p className="text-xs text-slate-500">App preview</p>
            </div>
          </div>
          <nav className="mt-6 space-y-1">
            {appConfig.appNavItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </nav>
        </aside>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
