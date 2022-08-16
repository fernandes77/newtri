import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DashboardContainerContextProvider } from 'components/DashboardContainer/useDashboardContainer'
import { Header } from './Header'

export default {
  title: 'Components/DashboardContainer/Header',
  component: Header,
  decorators: [
    (Story) => (
      <DashboardContainerContextProvider>
        <Story />
      </DashboardContainerContextProvider>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  return <Header />
}

export const Primary = Template.bind({})
Primary.args = {}
