// React Hook Form
import { Control, Controller, FieldErrors } from 'react-hook-form'

// i18n
import { useTranslation } from 'react-i18next'

// Shared utilities
import { type Mods, classNames } from 'shared/lib/classNames/classNames'

// Shared UI components
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text'
import Input from 'shared/ui/Input/Input'
import Loader from 'shared/ui/Loader/Loader'
import Avatar from 'shared/ui/Avatar/Avatar'

// Entities
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

// Local
import { ProfileUpdateData } from '../../model/types/profile'
import { getFieldMetadata } from '../../lib/validators/profileSchema/profileSchema'

// Styles
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    data?: ProfileUpdateData
    error?: string
    isLoading?: boolean
    readonly?: boolean
    inputsErrors?: Record<keyof ProfileUpdateData, string>
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        inputsErrors,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props
    const { t } = useTranslation('profile')
    const metadata = getFieldMetadata(t)
    

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

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {
                    data?.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} size={100}/>
                        </div>
                    )
                }
                 {inputsErrors?.first && (
                    <Text 
                        text={inputsErrors.first} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <Input
                   value={data?.first}
                   label={t(metadata.first.label)}
                   className={cls.input}
                   onChange={(value) => {
                       onChangeFirstName!(value)                                
                   }}
                   readonly={readonly}
               />
                         
                {inputsErrors?.lastname && (
                    <Text 
                        text={inputsErrors.lastname} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <Input
                    value={data?.lastname}
                    label={t(metadata.lastname.label)}
                    className={cls.input}
                    onChange={(value) => {onChangeLastName!(value)}}
                    readonly={readonly}
                />
                {inputsErrors?.age && (
                    <Text 
                        text={inputsErrors.age} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <Input
                    type="number"
                    value={data?.age}
                    label={t(metadata.age.label)}
                    className={cls.input}
                    onChange={(value) => {onChangeAge!(value)}}
                    readonly={readonly}
                />
                {inputsErrors?.city && (
                    <Text 
                        text={inputsErrors.city} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <Input
                     value={data?.city}
                     label={t(metadata.city.label)}
                     className={cls.input}
                     onChange={(value) => {onChangeCity!(value)}}
                     readonly={readonly}
                />
                {inputsErrors?.username && (
                    <Text 
                        text={inputsErrors.username} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <Input
                   value={data?.username}
                   label={t(metadata.username.label)}
                   className={cls.input}
                   onChange={(value) => {onChangeUsername!(value)}}
                   readonly={readonly}
                />
                {inputsErrors?.avatar && (
                    <Text 
                        text={inputsErrors.avatar} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                 <Input
                    value={data?.avatar}
                    label={t(metadata.avatar.label)}
                    className={cls.input}
                    onChange={(value) => {onChangeAvatar!(value)}}
                    readonly={readonly}
                />
                {inputsErrors?.currency && (
                    <Text 
                        text={inputsErrors.currency} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <CurrencySelect 
                    className={cls.input}
                    value={data?.currency}
                    onChange={(value) => {onChangeCurrency!(value) }}
                    readonly={readonly}   
                />
                {inputsErrors?.country && (
                    <Text 
                        text={inputsErrors.country} 
                        theme={TextTheme.ERROR} 
                        className={cls.errorText} 
                    />
                )}
                <CountrySelect 
                    className={cls.input}
                    value={data?.country}
                    onChange={(value) => {onChangeCountry!(value)}}
                    readonly={readonly}
                />
        </div>
    </div>
  );
};

export default ProfileCard;
