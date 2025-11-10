// export interface CounterState {
//     value: number
// }

// eslint-disable-next-line max-len
import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router-dom'

import { type CounterSchema } from 'entities/Counter'
import { type EditableProfileSchema } from 'features/EditableProfileCard'
import { type UserScema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'

export interface StateSchema {
    counter: CounterSchema
    user: UserScema

    // Асихронные редюсеры
    loginForm?: LoginSchema
    profile?: EditableProfileSchema
    articleDetails?: ArticleDetailsSchema
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

export interface ThunkExtrArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtrArg
    state: StateSchema
}
