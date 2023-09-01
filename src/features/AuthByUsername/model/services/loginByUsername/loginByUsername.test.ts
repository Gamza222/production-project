import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type User, userActions } from 'enitities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch
    // let getState: () => StateSchema

    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    // test('success login', async () => {
    //     const userValue: User = { username: 'username', id: '1' }

    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         data: userValue
    //     }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)
    //     console.log(result)
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         status: '404'
    //     }))
    //     const action = loginByUsername({ username: '123', password: '123' })
    //     const result = await action(dispatch, getState, undefined)

    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toBe('error')
    // })
    test('success login', async () => {
        const userValue: User = { username: 'username', id: '1' }

        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue
        }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ password: '111', username: '111' })
        console.log(result)
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: '404'
        }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ password: '111', username: '111' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
