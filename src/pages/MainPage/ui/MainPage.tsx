import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'enitities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Counter />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
