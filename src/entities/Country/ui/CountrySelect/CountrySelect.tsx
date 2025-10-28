import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select }  from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    {value: Country.Belarus, content: 'country.Belarus'},
    {value: Country.Russia, content: 'country.Russia'},
    {value: Country.Armenia, content: 'country.Armenia'}
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('country.label')}
            options={options.map((option) => ({
                value: option.value,
                content: t(option.content)
            }))}
            value={value?.toString()}
            onChange={onChangeHandler}
            readonly={readonly}
        />
            
    )
})

export default CountrySelect