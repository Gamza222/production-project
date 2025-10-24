import { Profile, ProfileUpdateData } from "enitities/Profile"


export interface EditableProfileSchema {
    data?: Profile
    form?: ProfileUpdateData
    isLoading?: boolean
    error?: string
    readonly: boolean
}