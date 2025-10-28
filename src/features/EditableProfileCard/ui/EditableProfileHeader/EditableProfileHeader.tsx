// React
import { useCallback } from 'react'

// React Hook Form
import { FieldErrors } from 'react-hook-form'

// Redux
import { useSelector } from 'react-redux'

// i18n
import { useTranslation } from 'react-i18next'

// Shared utilities
import { classNames } from 'shared/lib/classNames/classNames'

// Shared components
import Text from 'shared/ui/Text/Text'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

// Entities
import { ProfileUpdateData } from 'entities/Profile'

// Local model
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

// Styles
import cls from './EditableProfileHeader.module.scss'

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
        if (__PROJECT__ !== 'storybook') {
            dispatch(profileActions.setReadonly(false))
        }
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(profileActions.cancelEdit())
        }
        clearErrors?.()
        resetFormData?.()
    }, [dispatch, clearErrors, resetFormData])


    const onSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(updateProfileData())
        }
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
