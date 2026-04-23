import { House, Info } from 'lucide-react'

export const appConfig = {
  title: 'Taskbit',
  navLinks: [
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
} as const
