import { appTitle } from '@taskbit/shared'
import { AppWindow, House, Info } from 'lucide-react'

export const appConfig = {
  title: appTitle,
  marketingNavLinks: [
    {
      label: 'Home',
      to: '/',
      icon: House,
      exact: true,
    },
    {
      label: 'About',
      to: '/about',
      icon: Info,
      exact: false,
    },
  ],
  appNavItems: [
    {
      label: 'Workspace',
      to: '/app',
      icon: AppWindow,
    },
  ],
} as const
