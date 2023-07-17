// export interface CounterState {
//     value: number
// }

import { type CounterSchema } from 'enitities/Counter'
import { type UserScema } from 'enitities/User'

export interface StateSchema {
    counter: CounterSchema
    user: UserScema
}
