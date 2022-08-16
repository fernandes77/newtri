import { AppShell } from '@mantine/core'
import { Header } from 'components/Header'
import { Navbar } from 'components/Navbar'
import { DashboardContainerProps } from './DashboardContainer.types'
import { DashboardContainerContextProvider } from './useDashboardContainer'

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return (
    <DashboardContainerContextProvider>
      <AppShell navbar={<Navbar />} header={<Header />} padding="md">
        {children}
      </AppShell>
    </DashboardContainerContextProvider>
  )
}
