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
import { memo } from 'react'

interface ProfileCardProps {
    className?: string
    data?: ProfileUpdateData
    error?: string
    isLoading?: boolean
    readonly?: boolean
    control?: Control<ProfileUpdateData>
    inputsErrors?: FieldErrors<ProfileUpdateData>
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}

const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        control,
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
                {inputsErrors?.first?.message && <Text text={inputsErrors.first.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="first"
                    control={control}
                    render={({ field }) => (
                        <Input
                            value={data?.first}
                            label={t(metadata.first.label)}
                            className={cls.input}
                            onChange={(value) => {
                                onChangeFirstName!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.lastname?.message && <Text text={inputsErrors.lastname.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => (
                        <Input
                            value={data?.lastname}
                            label={t(metadata.lastname.label)}
                            className={cls.input}
                            onChange={(value) => {
                                onChangeLastName!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.age?.message && <Text text={inputsErrors.age.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            value={data?.age}
                            label={t(metadata.age.label)}
                            className={cls.input}
                            onChange={(value) => {  
                                onChangeAge!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.city?.message && <Text text={inputsErrors.city.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <Input
                            value={data?.city}
                            label={t(metadata.city.label)}
                            className={cls.input}
                            onChange={(value) => {
                                onChangeCity!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.username?.message && <Text text={inputsErrors.username.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                        <Input
                            value={data?.username}
                            label={t(metadata.username.label)}
                            className={cls.input}
                            onChange={(value) => {
                                onChangeUsername!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.avatar?.message && <Text text={inputsErrors.avatar.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="avatar"
                    control={control}
                    render={({ field }) => (
                        <Input
                            value={data?.avatar}
                            label={t(metadata.avatar.label)}
                            className={cls.input}
                            onChange={(value) => {
                                onChangeAvatar!(value)
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                {inputsErrors?.currency?.message && <Text text={inputsErrors.currency.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="currency"
                    control={control}
                    render={({ field }) => (
                        <CurrencySelect 
                            className={cls.input}
                            value={field.value}
                            onChange={(value) => {
                                onChangeCurrency!(value) 
                                field.onChange(value)  
                            }}
                            readonly={readonly}
                        />
                    )}
                />
                                
                {inputsErrors?.country?.message && <Text text={inputsErrors.country.message} theme={TextTheme.ERROR} className={cls.errorText} />}
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <CountrySelect
                            className={cls.input}
                            value={field.value}
                            onChange={(value) => {
                                onChangeCountry!(value)  
                                field.onChange(value) 
                            }}
                            readonly={readonly}
                        />
                    )}
                />
        </div>
    </div>
  );
});

export default ProfileCard;
