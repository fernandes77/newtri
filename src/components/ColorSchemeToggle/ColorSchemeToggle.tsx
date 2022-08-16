import { useColorSchemeToggle } from './useColorSchemeToggle'
import { SegmentedControl, Center } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons'

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorSchemeToggle()

  return (
    <SegmentedControl
      data-testid="color-scheme-toggle"
      value={colorScheme}
      onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
      data={[
        {
          value: 'light',
          label: (
            <Center data-testid="color-scheme-toggle-light">
              <IconSun size={20} stroke={1.5} />
            </Center>
          )
        },
        {
          value: 'dark',
          label: (
            <Center data-testid="color-scheme-toggle-dark">
              <IconMoon size={20} stroke={1.5} />
            </Center>
          )
        }
      ]}
    />
  )
}
