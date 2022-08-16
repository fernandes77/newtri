import { render } from 'utils/testHelpers'
import { MainLink } from '.'
import { IconHome } from '@tabler/icons'

describe('<MainLink />', () => {
  it('should render the main link', () => {
    const { container } = render(
      <MainLink icon={<IconHome size={16} />} label="Home" to="/" />
    )

    expect(container.querySelector('.icon-tabler-home')).toBeInTheDocument()
    expect(container.querySelector('.mantine-Text-root')).toHaveTextContent(
      'Home'
    )
  })
})
