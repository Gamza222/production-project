// Storybook
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

// Components
import EditableProfileCard from './EditableProfileCard'

// Entities
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

// Storybook decorators
import { FormDecorator } from 'shared/config/storybook/FormDecorator/FormDecorator'

//pics
import avatar from 'shared/assets/tests/dog.jpg'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [FormDecorator()]
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />

export const Main = Template.bind({})
Main.args = {}
Main.decorators = [StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            first: 'Vasya',
            lastname: 'kovalev',
            age: 27,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
        }
    }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            first: 'Vasya',
            lastname: 'kovalev',
            age: 27,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
        }
    }
})]



