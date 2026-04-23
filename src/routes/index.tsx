import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage(): React.JSX.Element {
  return (
    <section className="space-y-4">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        Welcome
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Taskbit keeps the starter app ready for real work.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        This home page is now defined directly in the route file, with a shared
        header above it so the app has a simple reusable shell.
      </p>
    </section>
  )
}
