import { Link } from '@tanstack/react-router'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'

const navLinkClassName =
  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950'
const activeNavLinkClassName = `${navLinkClassName} bg-slate-100 text-slate-950`

export function MarketingHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-950">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white"
          >
            Tb
          </span>
          <span>{appConfig.title}</span>
        </Link>
        <nav className="flex items-center gap-1">
          {appConfig.marketingNavLinks.map((navLink) => {
            const { exact, icon: Icon, label, to } = navLink

            return (
              <Link
                key={to}
                to={to}
                activeOptions={exact ? { exact: true } : undefined}
                className={navLinkClassName}
                activeProps={{ className: activeNavLinkClassName }}
              >
                <Icon aria-hidden="true" className="size-4" />
                <span>{label}</span>
              </Link>
            )
          })}
          <Button asChild size="sm" className="ml-3">
            <Link to="/app">Open app preview</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
