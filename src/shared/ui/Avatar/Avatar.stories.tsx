import React from 'react'

import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'
import AvatarPic from './dog.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    size: 150,
    src: AvatarPic
}

export const Small = Template.bind({})
Small.args = {
    size: 30,
    src: AvatarPic
}
