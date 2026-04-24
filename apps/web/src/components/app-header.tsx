import { Link } from '@tanstack/react-router'

import { appConfig } from '#/config'

const navLinkClassName =
  'rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'
const navLinkContentClassName = `${navLinkClassName} inline-flex items-center gap-2`
const activeNavLinkClassName = `${navLinkClassName} bg-slate-100 text-slate-900`

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-950">
          {appConfig.title}
        </Link>
        <nav className="flex items-center gap-2">
          {appConfig.navLinks.map((navLink) => {
            const { exact, icon: Icon, label, to } = navLink

            return (
              <Link
                key={to}
                to={to}
                activeOptions={exact ? { exact: true } : undefined}
                className={navLinkContentClassName}
                activeProps={{ className: activeNavLinkClassName }}
              >
                <Icon aria-hidden="true" className="size-4" />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
