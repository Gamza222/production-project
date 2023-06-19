import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Modal from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: 'true',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit magnam similique ipsam eligendi, sed magni voluptatibus possimus dolorem quoperferendis asperiores eum ut facere culpa, sapiente aliquid repellat quod!'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: 'true',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit magnam similique ipsam eligendi, sed magni voluptatibus possimus dolorem quoperferendis asperiores eum ut facere culpa, sapiente aliquid repellat quod!'
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
