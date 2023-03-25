import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
