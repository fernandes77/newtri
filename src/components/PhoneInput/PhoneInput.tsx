import { InputBase } from '@mantine/core'
import { PhoneInputProps } from './PhoneInput.types'
import { usePhoneInput } from './usePhoneInput'
import InputMask from 'react-input-mask'

export const PhoneInput = (props: PhoneInputProps) => {
  const { mask, value, onChange } = usePhoneInput(props)

  return (
    <InputBase
      {...props}
      component={InputMask}
      mask={mask}
      value={value}
      onChange={onChange}
    />
  )
}
