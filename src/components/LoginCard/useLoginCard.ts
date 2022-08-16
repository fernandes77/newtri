import { useForm } from '@mantine/form'
import { useToggle } from '@mantine/hooks'
import { showNotification } from '@mantine/notifications'

export const useLoginCard = () => {
  const [type, toggle] = useToggle(['login', 'signup'])

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: ''
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length < 6 ? 'Passwords must be at least 6 characters long' : null
    }
  })

  const onSubmit = () => {
    const { name, email, password } = form.values

    if (type === 'signup') {
    } else {
    }
  }

  const testAccount = {
    email: 'me+teste@rodrigofernand.es',
    password: '123456'
  }

  const signInToTestAccount = () => {}

  const authErrors = {
    'auth/email-already-exists':
      'This email address is already associated to an account.',
    'auth/email-already-in-use':
      'This email address is already associated to an account.',
    'auth/internal-error': 'Oops, server error. Please try again.',
    'auth/invalid-email': 'Invalid email. Please provide a valid email.',
    'auth/user-not-found':
      "We couldn't find an account associated with this email address.",
    'auth/wrong-password': 'Incorrect password.',
    'auth/too-many-requests': 'Too many requests. Please try again later.',
    'auth/unauthorized-domain': 'Unauthorized domain.'
  }

  const showError = (errorCode: string) => {
    showNotification({
      title: 'Error',
      message: authErrors[errorCode as keyof typeof authErrors],
      color: 'red'
    })
  }

  return {
    type,
    toggle,
    form,
    onSubmit,
    signInToTestAccount
  }
}
