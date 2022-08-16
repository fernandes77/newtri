import { useMantineColorScheme, useMantineTheme } from '@mantine/core'

export const useLogo = () => {
  const { colorScheme } = useMantineColorScheme()

  const theme = useMantineTheme()

  const textColor = colorScheme === 'dark' ? theme.colors.dark[0] : theme.black

  return { textColor }
}
