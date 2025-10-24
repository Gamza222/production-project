import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select }  from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    {value: Currency.RUB, content: 'currency.RUB'},
    {value: Currency.USD, content: 'currency.USD'},
    {value: Currency.EUR, content: 'currency.EUR'}
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])


    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('currency.label')}
            options={options.map((option) => ({
                value: option.value,
                content: t(option.content)
            }))}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
            
    )
})

export default CurrencySelect