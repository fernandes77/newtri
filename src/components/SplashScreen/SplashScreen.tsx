import { Box, Center } from '@mantine/core'
import { Logo } from 'components/Logo'

export const SplashScreen = () => {
  return (
    <Center sx={{ width: '100vw', height: '100vh' }}>
      <Box
        sx={(theme) => ({
          width: '25rem',
          maxWidth: '100%',
          padding: theme.spacing.xl
        })}
      >
        <Logo />
      </Box>
    </Center>
  )
}
