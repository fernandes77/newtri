import { Center } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ColorSchemeToggle } from './ColorSchemeToggle'

export default {
  title: 'Components/ColorSchemeToggle',
  component: ColorSchemeToggle,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ColorSchemeToggle>

const Template: ComponentStory<typeof ColorSchemeToggle> = () => (
  <Center style={{ height: '100vh' }}>
    <ColorSchemeToggle />
  </Center>
)

export const Primary = Template.bind({})
