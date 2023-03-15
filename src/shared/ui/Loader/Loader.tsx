import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader