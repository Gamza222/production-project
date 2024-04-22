import React, { useMemo } from 'react'
import cls from './Avatar.module.scss'

import { type Mods, classNames } from 'shared/lib/classNames/classNames'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const mods: Mods = {}

    const styles = useMemo<React.CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
        />

    )
}

export default Avatar
