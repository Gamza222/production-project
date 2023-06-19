import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTest'

export interface ComponentRenderOptions {
    route?: string
}

export function ComponentRender (component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/'
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
