import { InputBaseProps } from '@mantine/core'

export type PhoneInputProps = InputBaseProps & {
  value?: string
  onChange?: (value: string) => void
}
