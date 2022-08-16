import { Center } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginCard } from '.'

export default {
  title: 'Components/LoginCard',
  component: LoginCard,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof LoginCard>

const Template: ComponentStory<typeof LoginCard> = () => (
  <Center>
    <LoginCard />
  </Center>
)

export const Primary = Template.bind({})
Primary.args = {}
