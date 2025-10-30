import React, { memo, type InputHTMLAttributes, type PropsWithChildren, useState, useEffect, useRef } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends PropsWithChildren,
    HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    label?: string
    autofocus?: boolean
    readonly?: boolean
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        label,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onBlur = () => {
    }
    const onFocus = () => {
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [])}>
            { label && (
                <div className={cls.label}>
                    {`${label}>`}
                </div>
            )
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    {...otherProps}
                />
            </div>
        </div>
    )
})

export default Input
