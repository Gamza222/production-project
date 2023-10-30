import { type ReducersMapObject, configureStore, type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'enitities/Counter'
import { userReducer } from 'enitities/User'
import { createReducerManager } from './ReducerManager'

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const ReducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: ReducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = ReducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
