import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import Loader from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
