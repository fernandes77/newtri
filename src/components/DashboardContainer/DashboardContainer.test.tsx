import { render, screen } from 'utils/testHelpers'
import { DashboardContainer } from '.'

describe('<DashboardContainer />', () => {
  it('should render the app container with children', () => {
    render(<DashboardContainer>Test</DashboardContainer>)

    expect(screen.getByText(/app goes here/i)).toBeInTheDocument()
  })
})
