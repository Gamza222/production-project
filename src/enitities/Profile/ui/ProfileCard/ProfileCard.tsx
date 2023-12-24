import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ProfileCard.module.scss'

import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { type Profile } from '../../model/types/profile'
import { useTranslation } from 'react-i18next'
import Input from 'shared/ui/Input/Input'
import Loader from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    )
}

export default ProfileCard
