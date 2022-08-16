import { Group, Navbar as MTNavbar } from '@mantine/core'
import { ColorSchemeToggle } from 'components/ColorSchemeToggle'
import { MainLink } from 'components/MainLink'
import { useNavbar } from './useNavbar'

export const Navbar = () => {
  const { isOpenedNavbarMobile, toggleNavbarMobile, links } = useNavbar()

  return (
    <MTNavbar
      p="lg"
      hiddenBreakpoint="sm"
      hidden={!isOpenedNavbarMobile}
      width={{ sm: 220, lg: 300 }}
    >
      <MTNavbar.Section grow mt="md" onClick={() => toggleNavbarMobile()}>
        {Object.keys(links).map((page, key) => (
          <MainLink key={key} {...links[page]} />
        ))}
      </MTNavbar.Section>

      <MTNavbar.Section>
        <Group position="center">
          <ColorSchemeToggle />
        </Group>
      </MTNavbar.Section>
    </MTNavbar>
  )
}
