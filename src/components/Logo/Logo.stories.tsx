import { Box, Center } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
  <Center style={{ height: '100vh' }}>
    <Box>
      <Logo noText={args.noText} />
    </Box>
  </Center>
)

export const Primary = Template.bind({})
Primary.args = {
  noText: false
}
