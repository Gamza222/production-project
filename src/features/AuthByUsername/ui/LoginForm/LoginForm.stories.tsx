import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Type Text',
    value: '123211'
}
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' }
})]

export const withError = Template.bind({})
withError.args = {
    placeholder: 'Type Text',
    value: '123211'

}
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Please enter' }
})]

export const Loading = Template.bind({})
Loading.args = {
    placeholder: 'Type Text',
    value: '123211'

}
Loading.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: true }
})]
