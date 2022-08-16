import {
  Anchor,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput
} from '@mantine/core'
import { GoogleButton } from 'components/GoogleButton'
import { Logo } from 'components/Logo'
import { useLoginCard } from './useLoginCard'

export const LoginCard = () => {
  const { form, toggle, type, onSubmit, signInToTestAccount } = useLoginCard()

  return (
    <Paper radius="sm" p="xl" withBorder shadow="xl">
      <Container
        size={200}
        sx={(theme) => ({
          padding: theme.spacing.md
        })}
      >
        <Logo />
      </Container>

      <Group grow mb="md" mt="md">
        <GoogleButton>
          <Text>Enter with Google</Text>
        </GoogleButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          {type === 'signup' && (
            <TextInput
              required
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@example.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password must be at least 6 characters long'
            }
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'login'
              ? "Don't have an account? Sign up"
              : 'Already have an account? Login'}
          </Anchor>
          <Button
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan.4' }}
            type="submit"
          >
            {type === 'login' ? 'Login' : 'Sign up'}
          </Button>
        </Group>
      </form>

      <Center mt="xl">
        <Button onClick={signInToTestAccount} color="gray" variant="subtle">
          No, thanks. I just want to test the app
        </Button>
      </Center>
    </Paper>
  )
}
