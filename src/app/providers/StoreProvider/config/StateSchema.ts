// export interface CounterState {
//     value: number
// }

// eslint-disable-next-line max-len
import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type CounterSchema } from 'enitities/Counter'
import { type UserScema } from 'enitities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
    counter: CounterSchema
    user: UserScema

    // Асихронные редюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
