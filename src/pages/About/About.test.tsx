import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material'
import { createAppTheme } from 'src/config/theme'
import { About } from './index'

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

describe('About Page', () => {
  it('renders page title', () => {
    render(
      <TestWrapper>
        <About />
      </TestWrapper>
    )
    
    expect(screen.getByText('About This Project')).toBeInTheDocument()
    expect(screen.getByText(/A modern React weather application/)).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(
      <TestWrapper>
        <About />
      </TestWrapper>
    )
    
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument()
    expect(screen.getByText('Type Safe')).toBeInTheDocument()
    expect(screen.getByText('Modern Stack')).toBeInTheDocument()
    expect(screen.getByText('Well Tested')).toBeInTheDocument()
  })

  it('renders tech stack section', () => {
    render(
      <TestWrapper>
        <About />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tech Stack')).toBeInTheDocument()
    expect(screen.getByText('React 19.2')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vite 7')).toBeInTheDocument()
  })

  it('renders project goals section', () => {
    render(
      <TestWrapper>
        <About />
      </TestWrapper>
    )
    
    expect(screen.getByText('Project Goals')).toBeInTheDocument()
    expect(screen.getByText(/This project demonstrates modern React development patterns/)).toBeInTheDocument()
  })
})