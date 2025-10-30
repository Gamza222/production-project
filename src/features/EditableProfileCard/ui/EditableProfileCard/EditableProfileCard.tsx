// React
import { memo, useCallback, useEffect, useMemo, useRef } from 'react'

// Redux
import { useSelector } from 'react-redux'

// i18n
import { useTranslation } from 'react-i18next'

// Shared utilities
import { classNames } from 'shared/lib/classNames/classNames'

// Shared components
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

// Entities
import { ProfileCard, ProfileUpdateData } from 'entities/Profile'
import { createProfileSchema } from 'entities/Profile/lib/validators/profileSchema/profileSchema'

// Local components
import EditableProfileHeader from '../EditableProfileHeader/EditableProfileHeader'

// Local hooks
import { useProfileFormHandlers } from '../../lib/hooks/useFormChangeHandlers/useFormChangeHandlers'

// Local model
import { profileReducer } from '../../model/slice/profileSlice'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

// Styles
import cls from './EditableProfileCard.module.scss'

interface EditableProfileCardProps {
    className?: string
}

const initialReducers: ReducersList = {
    profile: profileReducer
}


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const hasSynced = useRef(false)

    const formData = useSelector(getProfileForm)
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    const formSchema = createProfileSchema(t)

    const errors = useMemo(() => {
        if (!formData || readonly) return {}
        const result = formSchema.safeParse(formData)
        if (result.success) return {}
        const fieldErrors: Record<string, string> = {}
        result.error.errors.forEach((err) => {
            const field = err.path[0]
            if (field && typeof field === 'string') {
                fieldErrors[field] = err.message
            }
        })
        
        return fieldErrors
    }, [formData, readonly, formSchema])

    const { 
        onChangeFirstName, 
        onChangeLastName,
        onChangeAge, 
        onChangeCity, 
        onChangeAvatar, 
        onChangeUsername, 
        onChangeCurrency, 
        onChangeCountry 
    } = useProfileFormHandlers()
    
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileHeader 
                inputsErrors={errors}
            />
            <ProfileCard 
                data={formData} 
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                inputsErrors={errors}
                onChangeCurrency={onChangeCurrency} 
                onChangeCountry={onChangeCountry} 
                onChangeFirstName={onChangeFirstName} 
                onChangeLastName={onChangeLastName} 
                onChangeAge={onChangeAge} 
                onChangeCity={onChangeCity} 
                onChangeAvatar={onChangeAvatar} 
                onChangeUsername={onChangeUsername} 
            />
        </div>
        </DynamicModuleLoader>
    )
})

export default EditableProfileCard


//for this form i put all values in state immidiately 
// + track errors immidiately - but its better to track 
// form with react-hook-forms or so - and put values in state 
// only on save or page leaving + show errors on save/onblur