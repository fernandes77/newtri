import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from './Navbar'

export default {
  title: 'Components/DashboardContainer/Navbar',
  component: Navbar,
  parameters: {
    reactRouter: {
      routePath: '/'
    },
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Primary = Template.bind({})
Primary.args = {}
