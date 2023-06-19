import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import Modal from 'shared/ui/Modal/Modal'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.links)}
                onClick={onToggleModal}
            >
                <p>{t('Войти')}</p>
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium velit magnam similique ipsam eligendi, sed magni voluptatibus possimus dolorem quo
                perferendis asperiores eum ut facere culpa, sapiente aliquid repellat quod!
            </Modal>
        </div>
    )
}

export default Navbar
