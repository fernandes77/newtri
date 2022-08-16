import { NavLink } from '@mantine/core'
import Link from 'next/link'
import { MainLinkProps } from './MainLink.types'
import { useMainLink } from './useMainLink'

export const MainLink = ({ icon, label, to }: MainLinkProps) => {
  const { location } = useMainLink()

  return (
    <Link href={to} passHref>
      <NavLink
        p="sm"
        sx={(theme) => ({
          borderRadius: theme.radius.sm
        })}
        styles={{
          label: {
            fontSize: 16
          }
        }}
        component="a"
        active={location === to}
        label={label}
        icon={icon}
      />
    </Link>
  )
}
