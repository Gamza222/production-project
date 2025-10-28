import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { type Profile } from 'entities/Profile'

const mockProfileData: Profile = {
    username: 'testuser',
    first: 'John',
    lastname: 'Doe',
    age: 30,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    avatar: 'https://example.com/avatar.jpg'
}

describe('fetchProfileData.test', () => {
    test('successful fetch returns fulfilled status with data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockProfileData }))

        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalledWith('/profile')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect((thunk.dispatch.mock.calls[0][0] as any).type).toBe('profile/fetchProfileData/pending')
        expect((thunk.dispatch.mock.calls[1][0] as any).type).toBe('profile/fetchProfileData/fulfilled')
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(mockProfileData)
    })

    test('network error returns rejected status', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockRejectedValue(new Error('Network error'))

        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalledWith('/profile')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect((thunk.dispatch.mock.calls[0][0] as any).type).toBe('profile/fetchProfileData/pending')
        expect((thunk.dispatch.mock.calls[1][0] as any).type).toBe('profile/fetchProfileData/rejected')
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })

    test('API returns empty data returns rejected status', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: null }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
