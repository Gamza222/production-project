import { Country } from 'entities/Country'
import { profileReducer } from '../slice/profileSlice'
import { type EditableProfileSchema } from '../types/editableProfileSchema'
import { profileActions } from './profileSlice'
import { Currency } from 'entities/Currency'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
    avatar: 'https://via.placeholder.com/150'
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<EditableProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as EditableProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })
    test('test cancel edit', () => {
        const state: DeepPartial<EditableProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(
            state as EditableProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            data,
            form: data
        })
    })
    test('test update profile', () => {
        const state: DeepPartial<EditableProfileSchema> = { form: { username: '' } }
        expect(profileReducer(
            state as EditableProfileSchema,
            profileActions.updateProfile({ username: '123' })
        )).toEqual({
            form: { username: '123' }
        })
    })
    test('updateProfile merges with existing form', () => {
        const state: DeepPartial<EditableProfileSchema> = { form: { username: 'old', city: 'Moscow' } }
        expect(profileReducer(
            state as EditableProfileSchema,
            profileActions.updateProfile({ username: 'new' })
        )).toEqual({ form: { username: 'new', city: 'Moscow' } })
    })
    test('test update profile service pending', () => {
        const state: DeepPartial<EditableProfileSchema> = { isLoading: false }
        expect(profileReducer(
            state as EditableProfileSchema,
            fetchProfileData.pending
        )).toEqual({
            isLoading: true,
            error: undefined
        })
        expect(profileReducer(
            state as EditableProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            error: undefined
        })
    })
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<EditableProfileSchema> = { isLoading: true }
        expect(profileReducer(
            state as EditableProfileSchema,
            fetchProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            form: data,
            readonly: true,
            data
        })
        expect(profileReducer(
            state as EditableProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            form: data,
            readonly: true,
            data
        })
    })
    test('test services rejected', () => {
        const state: DeepPartial<EditableProfileSchema> = { isLoading: true }

        expect(profileReducer(
            state as EditableProfileSchema,
            fetchProfileData.rejected(new Error(), '', undefined, 'error')
        )).toEqual({
            isLoading: false,
            error: 'error'
        })

        expect(profileReducer(
            state as EditableProfileSchema,
            updateProfileData.rejected(new Error(), '', undefined, 'error')
        )).toEqual({
            isLoading: false,
            error: 'error'
        })
    })
})
