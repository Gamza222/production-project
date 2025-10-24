import { useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './EditableProfileHeader.module.scss'
import Text from 'shared/ui/Text/Text'

import Button, { ButtonTheme } from 'shared/ui/Button/Button'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { FieldErrors } from 'react-hook-form'
import { Profile, ProfileUpdateData } from 'enitities/Profile'

interface EditableProfileHeaderProps {
    className?: string
    inputsErrors?: FieldErrors<ProfileUpdateData>
    clearErrors?: () => void
    resetFormData?: () => void
}

const EditableProfileHeader = (props: EditableProfileHeaderProps) => {
    const { className, inputsErrors,  clearErrors, resetFormData } = props
    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const isErrors = Object.keys(inputsErrors || {}).length > 0

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
        clearErrors?.()
        resetFormData?.()
    }, [dispatch, clearErrors, resetFormData])


    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.EditableProfileHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {
                readonly
                    ? (
                        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button  disabled={isErrors} theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </>
                    )
            }
        </div>
    )
}

export default EditableProfileHeader
