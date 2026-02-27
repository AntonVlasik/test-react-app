import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material'
import { createAppTheme } from 'src/config/theme'
import AppLayout from './index'

// Test utilities
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient()
  const theme = createAppTheme('light')
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

describe('AppLayout Component', () => {
  it('renders navigation', () => {
    render(
      <TestWrapper>
        <AppLayout />
      </TestWrapper>
    )
    
    expect(screen.getByText('Weather App 2026')).toBeInTheDocument()
  })

  it('renders outlet container', () => {
    render(
      <TestWrapper>
        <AppLayout />
      </TestWrapper>
    )
    
    // Check that container exists
    const container = document.querySelector('.MuiContainer-root')
    expect(container).toBeInTheDocument()
  })

  it('has correct layout structure', () => {
    render(
      <TestWrapper>
        <AppLayout />
      </TestWrapper>
    )
    
    // Check that layout has proper Box structure
    const layoutRoot = document.querySelector('.MuiBox-root')
    expect(layoutRoot).toBeInTheDocument()
  })
})