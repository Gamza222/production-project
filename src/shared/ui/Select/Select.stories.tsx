import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Выберите опцию ^^ :) '
}

export const Small = Template.bind({})
Small.args = {
}
