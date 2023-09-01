import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: React.ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props

    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvider
