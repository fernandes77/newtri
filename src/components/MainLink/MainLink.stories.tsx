import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconHome } from '@tabler/icons'
import { MainLink } from './MainLink'

export default {
  title: 'Components/DashboardContainer/MainLink',
  component: MainLink,
  parameters: {
    reactRouter: {
      routePath: '/'
    },
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof MainLink>

const Template: ComponentStory<typeof MainLink> = (args) => (
  <MainLink icon={args.icon} label={args.label} to={args.to} />
)

export const Selected = Template.bind({})
Selected.args = {
  label: 'Home',
  icon: <IconHome size={16} />,
  to: '/'
}

export const NotSelected = Template.bind({})
NotSelected.args = {
  label: 'Home',
  icon: <IconHome size={16} />,
  to: '/other-route'
}
