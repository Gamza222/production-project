import { render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
    test('Test Render', () => {
        render(<Sidebar /> )
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

})

// testing react library
// jest
// testing library jest dom
