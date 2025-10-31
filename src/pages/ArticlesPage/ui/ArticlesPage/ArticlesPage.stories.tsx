import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import  ArticlesPage  from './ArticlesPage'

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof ArticlesPage>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
