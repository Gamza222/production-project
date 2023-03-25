import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}></div>
            <AppLink
                to={'/'}
                theme={AppLinkTheme.SECONDARY}
                className={classNames(cls.mainLink)}
            >
                {t('Главная')}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                {t('О сайте')}
            </AppLink>
        </div>
    )
}

export default Navbar
