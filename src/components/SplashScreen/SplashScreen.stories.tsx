import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SplashScreen } from '.'

export default {
  title: 'Components/SplashScreen',
  component: SplashScreen,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof SplashScreen>

const Template: ComponentStory<typeof SplashScreen> = () => <SplashScreen />

export const Primary = Template.bind({})
Primary.args = {}
