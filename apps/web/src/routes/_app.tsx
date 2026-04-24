import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

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
          <nav aria-label="App navigation" className="mt-6 space-y-1">
            {appConfig.appNavItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  activeOptions={{ exact: true }}
                  activeProps={{
                    'aria-current': 'page',
                    className: 'bg-slate-100 text-slate-900',
                  }}
                  inactiveProps={{
                    className: 'text-slate-700 hover:bg-slate-50 hover:text-slate-950',
                  }}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  <span>{item.label}</span>
                </Link>
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
