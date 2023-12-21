import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Profile.module.scss'

interface ProfileProps {
    className?: string
}

const Profile = ({ className }: ProfileProps) => {
    return (
        <div className={classNames(cls.Profile, {}, [])}>

        </div>
    )
}

export default Profile
