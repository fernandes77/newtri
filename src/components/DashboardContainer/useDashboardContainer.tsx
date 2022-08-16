import { createContext, useState } from 'react'
import { ContextProviderProps } from 'types/context'
import { DashboardContainerContextData } from './DashboardContainer.types'

export const DashboardContainerContextDefaultValues: DashboardContainerContextData =
  {
    isOpenedNavbarMobile: false,
    toggleNavbarMobile: () => null
  }

export const DashboardContainerContext =
  createContext<DashboardContainerContextData>(
    DashboardContainerContextDefaultValues
  )

export const DashboardContainerContextProvider = ({
  children
}: ContextProviderProps) => {
  const [isOpenedNavbarMobile, setIsOpenedNavbarMobile] =
    useState<boolean>(false)

  const toggleNavbarMobile = () => {
    setIsOpenedNavbarMobile((currState) => !currState)
  }

  return (
    <DashboardContainerContext.Provider
      value={{ isOpenedNavbarMobile, toggleNavbarMobile }}
    >
      {children}
    </DashboardContainerContext.Provider>
  )
}

export const useDashboardContainer = () => {
  return {}
}
