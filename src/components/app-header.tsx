import { Link } from '@tanstack/react-router'

const navLinkClassName =
  'rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'
const activeNavLinkClassName = `${navLinkClassName} bg-slate-100 text-slate-900`

export function AppHeader(): React.JSX.Element {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-950"
        >
          Taskbit
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={navLinkClassName}
            activeProps={{ className: activeNavLinkClassName }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={navLinkClassName}
            activeProps={{ className: activeNavLinkClassName }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
