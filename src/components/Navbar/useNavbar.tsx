import {
  IconApple,
  IconCalendarEvent,
  IconHome,
  IconUsers
} from '@tabler/icons'
import { DashboardContainerContext } from 'components/DashboardContainer/useDashboardContainer'
import { useContext } from 'react'
import { NavbarLinks } from './Navbar.types'

export const useNavbar = () => {
  const { isOpenedNavbarMobile, toggleNavbarMobile } = useContext(
    DashboardContainerContext
  )

  const links: NavbarLinks = {
    home: {
      icon: <IconHome size={18} />,
      label: 'Home',
      to: '/'
    },
    schedule: {
      icon: <IconCalendarEvent size={18} />,
      label: 'Schedule',
      to: '/schedule'
    },
    clients: {
      icon: <IconUsers size={18} />,
      label: 'Clients',
      to: '/clients'
    },
    mealPlans: {
      icon: <IconApple size={18} />,
      label: 'Meal Plans',
      to: '/meal-plans'
    }
  }

  return { isOpenedNavbarMobile, toggleNavbarMobile, links }
}
