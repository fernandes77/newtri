import { useForm } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { useState } from 'react'
import { AddClientFormValues, Gender } from './Clients.types'

export const useClients = () => {
  const [formLoading, setFormLoading] = useState<boolean>(false)

  const [addClientOpened, setAddClientOpened] = useState(false)

  const clients = [
    {
      id: '1',
      avatar:
        'https://ui-avatars.com/api/?name=Alana+Caldeira&background=1864ab&color=fff',
      name: 'Antônia Alana Caldeira',
      age: 48
    },
    {
      id: '2',
      avatar:
        'https://ui-avatars.com/api/?name=Alana+Caldeira&background=1864ab&color=fff',
      name: 'Benjamin Gael Enzo Mendes',
      age: 48
    },
    {
      id: '3',
      avatar:
        'https://ui-avatars.com/api/?name=Alana+Caldeira&background=1864ab&color=fff',
      name: 'Lorenzo Daniel Drumond',
      age: 48
    },
    {
      id: '4',
      avatar:
        'https://ui-avatars.com/api/?name=Alana+Caldeira&background=1864ab&color=fff',
      name: 'Tatiane Catarina Pires',
      age: 48
    },
    {
      id: '5',
      avatar:
        'https://ui-avatars.com/api/?name=Alana+Caldeira&background=1864ab&color=fff',
      name: 'Isabelle Larissa Sandra da Mata',
      age: 48
    }
  ]

  const openAddClient = () => {
    setAddClientOpened(true)
  }

  const closeAddClient = () => {
    form.reset()
    setAddClientOpened(false)
  }

  const form = useForm<AddClientFormValues>({
    initialValues: {
      name: '',
      gender: null,
      birthdate: null,
      phone: '',
      email: ''
    },

    validate: {
      gender: (val: Gender | null) =>
        val !== null ? null : 'Choose an option',
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email')
    }
  })

  const showError = (errorCode: string) => {
    showNotification({
      title: 'Error',
      message: 'Clients error',
      color: 'red'
    })
  }

  const showAddClientSuccess = (clientName: string) => {
    showNotification({
      title: 'New client added',
      message: `Client ${clientName} was added successfully`,
      color: 'green'
    })
  }

  const onSubmitAddClient = async () => {
    setFormLoading(true)

    try {
      const body = {
        ...form.values,
        gender: form.values.gender!,
        birthdate: form.values.birthdate!
      }
      showAddClientSuccess(body.name)
      closeAddClient()
    } catch (error: any) {
      showError(error.message)
      console.error(error)
    } finally {
      setFormLoading(false)
    }
  }

  return {
    clients,
    addClientOpened,
    openAddClient,
    closeAddClient,
    form,
    onSubmitAddClient,
    formLoading
  }
}
