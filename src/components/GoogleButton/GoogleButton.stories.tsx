import { Box, Center } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GoogleButton } from '.'

export default {
  title: 'Components/GoogleButton',
  component: GoogleButton,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof GoogleButton>

const Template: ComponentStory<typeof GoogleButton> = (args) => (
  <Center style={{ height: '100vh' }}>
    <Box>
      <GoogleButton>{args.children}</GoogleButton>
    </Box>
  </Center>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Login'
}
