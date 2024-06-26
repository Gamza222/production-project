import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginError.test', () => {
    test('should return login', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
