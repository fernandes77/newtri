import { useMantineColorScheme } from '@mantine/core'

export const useColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return { colorScheme, toggleColorScheme }
}
