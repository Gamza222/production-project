import { createSlice } from '@reduxjs/toolkit'
import { type UserScema } from '../types/user'

const initialState: UserScema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
