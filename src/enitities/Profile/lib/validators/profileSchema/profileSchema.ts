// src/enitities/Profile/lib/validators/profileSchema/profileSchema.ts
import { z } from 'zod'
import { Currency } from 'enitities/Currency'
import { Country } from 'enitities/Country'
import { TFunction } from 'i18next'
import { formFieldMetadata } from 'shared/model/types/formFieldMetadata/formFieldMetadata'
import { ProfileUpdateData } from '../../../model/types/profile'

export const createProfileSchema = (t: TFunction) => z.object({
  first: z.string()
    .min(1, t('profile-validation.Имя.required'))
    .max(15, t('profile-validation.Имя.maxLength')),
  
  lastname: z.string()
    .min(1, t('profile-validation.Фамилия.required'))
    .max(15, t('profile-validation.Фамилия.maxLength')),
  
  age: z.number()
    .min(0, t('profile-validation.Возраст.min'))
    .max(120, t('profile-validation.Возраст.max')),
  
  currency: z.nativeEnum(Currency).optional(),
  country: z.nativeEnum(Country).optional(),
  
  city: z.string()
    .min(1, t('profile-validation.Город.required'))
    .max(20, t('profile-validation.Город.maxLength')),
  
  username: z.string()
    .min(3, t('profile-validation.Имя_пользователя.minLength'))
    .max(15, t('profile-validation.Имя_пользователя.maxLength'))
    .regex(/^[a-zA-Z0-9_]+$/, t('profile-validation.Имя_пользователя.invalidChars')),
  
    avatar: z.string()
    .url(t('profile-validation.Аватар.url'))
})


export const getFieldMetadata = (t: TFunction): Record<keyof ProfileUpdateData, formFieldMetadata> => ({
  first: {
    label: t('profile-validation.Имя.label'),
    placeholder: t('profile-validation.Имя.placeholder'),
    type: 'text'
  },
  lastname: {
    label: t('profile-validation.Фамилия.label'),
    placeholder: t('profile-validation.Фамилия.placeholder'),
    type: 'text'
  },
  age: {
    label: t('profile-validation.Возраст.label'),
    placeholder: t('profile-validation.Возраст.placeholder'),
    type: 'number'
  },
  currency: {
    label: t('profile-validation.Валюта.label'),
    placeholder: t('profile-validation.Валюта.placeholder'),
    type: 'select',
    options: Object.values(Currency).map(value => ({
      value,
      label: t(`currency.${value}`)
    }))
  },
  country: {
    label: t('profile-validation.Страна.label'),
    placeholder: t('profile-validation.Страна.placeholder'),
    type: 'select',
    options: Object.values(Country).map(value => ({
      value,
      label: t(`country.${value}`)
    }))
  },
  city: {
    label: t('profile-validation.Город.label'),
    placeholder: t('profile-validation.Город.placeholder'),
    type: 'text'
  },
  username: {
    label: t('profile-validation.Имя_пользователя.label'),
    placeholder: t('profile-validation.Имя_пользователя.placeholder'),
    type: 'text'
  },
  avatar: {
    label: t('profile-validation.Аватар.label'),
    placeholder: t('profile-validation.Аватар.placeholder'),
    type: 'text'
  }
})