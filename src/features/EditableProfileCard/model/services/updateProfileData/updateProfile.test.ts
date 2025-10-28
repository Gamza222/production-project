import { type StateSchema } from 'app/providers/StoreProvider'
import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const mockFormData = {
    username: 'testuser',
    first: 'John',
    lastname: 'Doe',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    avatar: 'https://example.com/avatar.jpg'
}

const initialState: DeepPartial<StateSchema> = {
    profile: {
        form: mockFormData,
        readonly: false,
        isLoading: false,
        error: undefined
    }
}

describe('updateProfileData.test', () => {
    test('successful update returns fulfilled status with data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, initialState)
        thunk.api.put.mockReturnValue(Promise.resolve({ data: mockFormData }))

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalledWith('/profile', mockFormData)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect((thunk.dispatch.mock.calls[0][0] as any).type).toBe('profile/updateProfileData/pending')
        expect((thunk.dispatch.mock.calls[1][0] as any).type).toBe('profile/updateProfileData/fulfilled')
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(mockFormData)
    })

    test('network error returns rejected status', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, initialState)
        thunk.api.put.mockRejectedValue(new Error('Network error'))

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalledWith('/profile', mockFormData)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect((thunk.dispatch.mock.calls[0][0] as any).type).toBe('profile/updateProfileData/pending')
        expect((thunk.dispatch.mock.calls[1][0] as any).type).toBe('profile/updateProfileData/rejected')
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })

    test('API returns null data returns rejected status', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, initialState)
        thunk.api.put.mockReturnValue(Promise.resolve({ data: null }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
