import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import React from 'react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Test Render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
    })

})

// testing react library
// jest
// testing library jest dom
