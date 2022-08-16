import { ReactNode } from 'react'

export type DashboardContainerProps = {
  children: ReactNode
}

export type DashboardContainerContextData = {
  isOpenedNavbarMobile: boolean
  toggleNavbarMobile: () => void
}
