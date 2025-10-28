// Storybook
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

// Components
import ProfileCard from './ProfileCard'

// Entities
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

// Storybook decorators
import { FormDecorator } from 'shared/config/storybook/FormDecorator/FormDecorator'

//pics
import avatar from 'shared/assets/tests/dog.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [FormDecorator()]
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'admin',
        first: 'Vasya',
        lastname: 'kovalev',
        age: 27,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Moscow',
        avatar: avatar
    }
}

export const withLoadingError = Template.bind({})
withLoadingError.args = {
   error: 'Error'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

export const withInputsErrors = Template.bind({})
withInputsErrors.args = {
    inputsErrors: {
        first: { type: 'required', message: 'Error' },
        lastname: { type: 'required', message: 'Error' },
        age: { type: 'required', message: 'Error' },
        city: { type: 'required', message: 'Error' },
        username: { type: 'required', message: 'Error' },
        avatar: { type: 'required', message: 'Error' },
        currency: { type: 'required', message: 'Error' },
        country: { type: 'required', message: 'Error' },
    }
}



