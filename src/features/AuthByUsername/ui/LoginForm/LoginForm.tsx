/* eslint-disable react/display-name */
import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slices/loginSlice'
import Text, { TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch<any>()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        console.log(result)
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, {}, [])}>
                <Text title={t('Форма')}/>
                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
                <Input
                    placeholder={t('Введите логин')}
                    type="text" className={cls.input}
                    autofocus={true}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type="text"
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
