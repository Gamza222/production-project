import { Country } from "enitities/Country"
import { Currency } from "enitities/Currency"
import { profileActions } from "features/EditableProfileCard/model/slice/profileSlice"
import { useMemo } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export const useProfileFormHandlers = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => ({
        onChangeFirstName: (value?: string) => 
            dispatch(profileActions.updateProfile({ first: value || '' })),
        onChangeLastName: (value?: string) => 
            dispatch(profileActions.updateProfile({ lastname: value || '' })),
        onChangeAge: (value?: string) => 
            dispatch(profileActions.updateProfile({ age: Number(value || 0) })),
        onChangeCity: (value?: string) => 
            dispatch(profileActions.updateProfile({ city: value || '' })),
        onChangeUsername: (value?: string) => 
            dispatch(profileActions.updateProfile({ username: value || '' })),
        onChangeAvatar: (value?: string) => 
            dispatch(profileActions.updateProfile({ avatar: value || '' })),
        onChangeCurrency: (currency: Currency) => 
            dispatch(profileActions.updateProfile({ currency })),
        onChangeCountry: (country: Country) => 
            dispatch(profileActions.updateProfile({ country }))
    }), [dispatch])
}