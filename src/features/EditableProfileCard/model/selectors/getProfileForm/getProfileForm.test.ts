import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const data = {
    username: '123',
    first: '123',
    lastname: '123',
    age: 123,
    currency: Currency.USD,
    country: Country.Russia,
    city: '123'
}

describe('getProfileForm.test', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
