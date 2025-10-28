import { type Profile, type ProfileUpdateData } from 'entities/Profile'

export interface EditableProfileSchema {
    data?: Profile
    form?: ProfileUpdateData
    isLoading?: boolean
    error?: string
    readonly: boolean
}
