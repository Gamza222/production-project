import { createReduxStore, type AppDispatch } from './config/store'
import StoreProvider from './ui/StoreProvider'
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    type ReduxStoreWithManager,
    type StateSchema,
    type AppDispatch,
    type ThunkConfig
}
