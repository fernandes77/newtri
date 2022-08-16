import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PhoneInput } from '.'

export default {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PhoneInput>

const Template: ComponentStory<typeof PhoneInput> = () => <PhoneInput />

export const Primary = Template.bind({})
Primary.args = {}
