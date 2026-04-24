import '../styles.css'

import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { appConfig } from '#/config'

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: appConfig.title }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="min-h-screen bg-white text-slate-950">
        <Outlet />
      </div>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
