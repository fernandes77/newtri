import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import { ReactNode } from 'react'

export const MantineProviders = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'novanutri-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const themeOverride: MantineThemeOverride = {
    colorScheme
  }

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={themeOverride}>
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
