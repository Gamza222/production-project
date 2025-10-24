import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createProfileSchema } from 'enitities/Profile/lib/validators/profileSchema/profileSchema'
import { Profile, ProfileCard, ProfileUpdateData } from 'enitities/Profile'
import EditableProfileHeader from '../EditableProfileHeader/EditableProfileHeader'
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { useSelector } from 'react-redux'
import { getProfileForm } from 'features/EditableProfileCard/model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { useProfileFormHandlers } from 'features/EditableProfileCard/lib/hooks/useFormChangeHandlers/useFormChangeHandlers'
import { getProfileData } from 'features/EditableProfileCard/model/selectors/getProfileData/getProfileData'

interface EditableProfileCardProps {
    className?: string
}

const initialReducers: ReducersList = {
    profile: profileReducer
}


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const { t: tProfile } = useTranslation()
    const dispatch = useAppDispatch()
    const hasSynced = useRef(false)

    const formData = useSelector(getProfileForm)
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const formSchema = createProfileSchema(tProfile)
    const {
        register,
        formState: { errors },
        control,
        trigger,
        reset,
        clearErrors,
        watch
    } = useForm<ProfileUpdateData>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
        mode: 'onChange'
    })

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

    const resetFormData = useCallback(() => {
        reset(profileData)
        console.log('resetting', watch())

    }, [reset, formData])

    console.log('errors', errors)

    useEffect(() => {
        if (profileData && !isLoading && !hasSynced.current) {
            resetFormData()
            hasSynced.current = true
        }
    }, [isLoading, hasSynced.current, profileData, resetFormData])

    useEffect(() => {
        if(formData && !readonly) {
            trigger()
        }
    }, [readonly])

    
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileHeader 
                clearErrors={clearErrors}
                resetFormData={resetFormData}
                inputsErrors={errors}
            />
            <ProfileCard 
                data={formData} 
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                control={control}
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