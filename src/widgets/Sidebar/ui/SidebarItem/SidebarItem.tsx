/* eslint-disable react/display-name */
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/items'
import { useTranslation } from 'react-i18next'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props
    const isAuth = useSelector(getUserAuthData)
    const { t } = useTranslation()
    if(item.authOnly && !isAuth) {
        return null
    }
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon}/>
            <span className={classNames(cls.link)}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})

export default SidebarItem
