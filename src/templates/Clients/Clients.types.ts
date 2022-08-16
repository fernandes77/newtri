export type ClientsProps = unknown

export type Gender = 'male' | 'female'

export type Client = {
  id: string
  uid: string
  name: string
  gender: Gender
  birthdate: Date
  phone: string
  email: string
}

export type AddClientFormValues = {
  name: string
  gender: Gender | null
  birthdate: Date | null
  phone: string
  email: string
}
