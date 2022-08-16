import {
  Header as MTHeader,
  Group,
  MediaQuery,
  Burger,
  Box
} from '@mantine/core'
import { Logo } from 'components/Logo'
import { User } from 'components/User'
import { useHeader } from './useHeader'

export const Header = () => {
  const { theme, isOpenedNavbarMobile, toggleNavbarMobile } = useHeader()

  return (
    <MTHeader height={60}>
      <Group sx={{ height: '100%' }} px="lg" position="apart">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={isOpenedNavbarMobile}
            onClick={() => toggleNavbarMobile()}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <Box sx={{ height: 20 }}>
          <Logo noText />
        </Box>

        <User />
      </Group>
    </MTHeader>
  )
}
