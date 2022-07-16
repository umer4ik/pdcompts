import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'Default button'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
  primary: true
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline button',
  outline: true
}

export const DivButton = Template.bind({})
DivButton.args = {
  children: 'Div button',
  tag: 'div'
}

export const LinkButton = Template.bind({})
LinkButton.args = {
  children: 'Link button',
  tag: 'a',
  href: '#',
  primary: true,
  onClick: (e: MouseEvent) => e.preventDefault()
}
