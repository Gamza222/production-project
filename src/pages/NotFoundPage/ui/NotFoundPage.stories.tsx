import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import NotFoundPage from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
