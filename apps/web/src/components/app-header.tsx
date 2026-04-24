import { Link } from '@tanstack/react-router'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'

const navLinkClassName =
  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[oklch(0.542_0.034_322.5)] transition hover:bg-[oklch(0.96_0.003_325.6)] hover:text-[oklch(0.145_0.008_326)]'
const activeNavLinkClassName = 'bg-[oklch(0.96_0.003_325.6)] text-[oklch(0.145_0.008_326)]'

export function MarketingHeader() {
  return (
    <header className="border-b border-[oklch(0.922_0.005_325.62)] bg-[oklch(0.99_0.003_326)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center xl:justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-semibold text-[oklch(0.145_0.008_326)]"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-[oklch(0.212_0.019_322.12)] text-sm font-bold text-[oklch(0.985_0.002_326)]"
          >
            Tb
          </span>
          <span>{appConfig.title}</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 sm:ml-4 xl:ml-0">
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
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link to="/app">Open app preview</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
