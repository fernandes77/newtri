import { ComponentStory, ComponentMeta } from '@storybook/react'
import { User } from './User'

export default {
  title: 'Components/DashboardContainer/User',
  component: User,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = () => <User />

export const Primary = Template.bind({})
Primary.args = {}
