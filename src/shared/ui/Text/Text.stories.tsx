import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Text, { TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet'
}
export const Error = Template.bind({})
Error.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet',
    theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Text lorem ipsum dolor sit amet'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title',
    text: 'Text lorem ipsum dolor sit amet'
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Text lorem ipsum dolor sit amet'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
