import { useEffect, useState } from 'react'
import { PhoneInputProps } from './PhoneInput.types'

export const usePhoneInput = (props: PhoneInputProps) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (props.value) setValue(props.value)
  }, [props.value])

  const mask = '(999) 999-9999'

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.value)

    props.onChange && props.onChange(event.currentTarget.value)
  }

  return { mask, value, onChange }
}
