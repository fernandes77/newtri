import { render, screen, renderHook, fireEvent } from 'utils/testHelpers'
import { ColorSchemeToggle } from '.'
import { useColorScheme } from '@mantine/hooks'

describe('<ColorSchemeToggle />', () => {
  it('should render color scheme toggle', () => {
    render(<ColorSchemeToggle />)

    expect(screen.getByTestId('color-scheme-toggle')).toBeInTheDocument()
  })

  it('should change color scheme to light', () => {
    render(<ColorSchemeToggle />)

    const { result } = renderHook(() => useColorScheme())

    const lightSwitch = screen.getByTestId('color-scheme-toggle-light')
    fireEvent.click(lightSwitch)

    expect(result.current).toBe('light')
  })

  it('should change color scheme to dark', () => {
    render(<ColorSchemeToggle />)

    const { result } = renderHook(() => useColorScheme())

    const darkSwitch = screen.getByTestId('color-scheme-toggle-dark')
    fireEvent.click(darkSwitch)

    expect(result.current).toBe('dark')
  })
})
