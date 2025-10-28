import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from '../types/counterSchema'

describe('counterSlice.test', () => {
    const state: CounterSchema = {
        value: 10
    }

    test('decrement', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })

    test('increment', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
