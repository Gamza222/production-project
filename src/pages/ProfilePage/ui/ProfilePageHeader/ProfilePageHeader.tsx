import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'
import Text from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions } from 'enitities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title={t('Профиль')} />
            {
                readonly
                    ? (
                        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                    )
            }
        </div>
    )
}

export default ProfilePageHeader
