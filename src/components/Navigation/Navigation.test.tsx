import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from 'src/config/theme'
import { Navigation } from './index'

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </BrowserRouter>
)

describe('Navigation Component', () => {
  it('renders navigation title', () => {
    render(
      <TestWrapper>
        <Navigation />
      </TestWrapper>
    )
    
    expect(screen.getByText('Weather App 2026')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <TestWrapper>
        <Navigation />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('has correct navigation structure', () => {
    render(
      <TestWrapper>
        <Navigation />
      </TestWrapper>
    )
    
    // Check header element exists
    const header = document.querySelector('header')
    expect(header).toBeInTheDocument()
    
    // Check that links exist and contain the buttons
    const homeLink = screen.getByText('Home').closest('a')
    const aboutLink = screen.getByText('About').closest('a')
    
    expect(homeLink).toHaveAttribute('href', '/')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
})