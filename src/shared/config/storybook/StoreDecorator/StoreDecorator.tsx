import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'features/EditableProfileCard'
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
// eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
