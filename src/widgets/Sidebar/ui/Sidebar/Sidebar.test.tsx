import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import React from 'react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender'

describe('Sidebar', () => {
    test('Test Render', () => {
        ComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        ComponentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})

// testing react library
// jest
// testing library jest dom
