import { render } from 'utils/testHelpers'
import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the light theme logo', () => {
    render(<Logo />)
  })
})
