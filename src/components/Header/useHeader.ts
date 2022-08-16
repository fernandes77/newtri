import { useMantineTheme } from '@mantine/core'
import { DashboardContainerContext } from 'components/DashboardContainer/useDashboardContainer'
import { useContext } from 'react'

export const useHeader = () => {
  const theme = useMantineTheme()

  const { isOpenedNavbarMobile, toggleNavbarMobile } = useContext(
    DashboardContainerContext
  )

  return { theme, isOpenedNavbarMobile, toggleNavbarMobile }
}
