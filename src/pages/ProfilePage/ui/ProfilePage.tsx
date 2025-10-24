import React, { memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'

import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from '../../../features/EditableProfileCard/ui/EditableProfileHeader/EditableProfileHeader'
import { Currency } from 'enitities/Currency'
import { Country } from 'enitities/Country'
import EditableProfileCard from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard'

interface ProfilePageProps {
    className?: string
}


const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation()

    return (
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <EditableProfileCard  />
            </div>
    )
})

export default ProfilePage
