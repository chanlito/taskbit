import { Link } from '@tanstack/react-router'

import { Button } from '#/components/ui/button'
import { appConfig } from '#/config'

const navLinkClassName =
  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground'
const activeNavLinkClassName = 'bg-muted text-foreground'

export function MarketingHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center xl:justify-between">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-foreground">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
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
