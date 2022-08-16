import { render, RenderOptions } from '@testing-library/react'
import { MantineProviders } from 'utils/mantine'
import { ReactElement } from 'react'

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: RenderOptions = {}
) => {
  return render(<MantineProviders>{ui}</MantineProviders>, renderOptions)
}

export * from '@testing-library/react'
export { customRender as render }
