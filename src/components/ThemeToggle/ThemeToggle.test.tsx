import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ThemeProvider } from '@mui/material'
import { createAppTheme } from 'src/config/theme'
import { ThemeToggle } from './ThemeToggle'
import { useThemeStore } from 'src/stores/themeStore'

// Mock the store
vi.mock('src/stores/themeStore', () => ({
  useThemeStore: vi.fn(),
}))

const mockUseThemeStore = vi.mocked(useThemeStore)

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = createAppTheme('light')
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

describe('ThemeToggle Component', () => {
  const mockToggleMode = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders light mode icon when mode is light', () => {
    mockUseThemeStore.mockReturnValue({
      mode: 'light',
      toggleMode: mockToggleMode,
      setMode: vi.fn(),
    })

    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )

    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument()
  })

  it('renders dark mode icon when mode is dark', () => {
    mockUseThemeStore.mockReturnValue({
      mode: 'dark',
      toggleMode: mockToggleMode,
      setMode: vi.fn(),
    })

    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )

    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument()
  })

  it('calls toggleMode when clicked', () => {
    mockUseThemeStore.mockReturnValue({
      mode: 'light',
      toggleMode: mockToggleMode,
      setMode: vi.fn(),
    })

    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    )

    const button = screen.getByLabelText('Switch to dark mode')
    fireEvent.click(button)

    expect(mockToggleMode).toHaveBeenCalledTimes(1)
  })
})