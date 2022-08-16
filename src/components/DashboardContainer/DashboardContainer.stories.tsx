import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DashboardContainer } from '.'

export default {
  title: 'Components/DashboardContainer/DashboardContainer',
  component: DashboardContainer,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof DashboardContainer>

const Template: ComponentStory<typeof DashboardContainer> = () => (
  <DashboardContainer>
    <h1>Story</h1>
  </DashboardContainer>
)

export const Primary = Template.bind({})
Primary.args = {}
