import {
  Avatar,
  Box,
  Button,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Stack,
  Table,
  TextInput,
  Title
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { IconPlus } from '@tabler/icons'
import { Gender } from './Clients.types'
import { useClients } from './useClients'
import { PhoneInput } from 'components/PhoneInput'
import { DashboardContainer } from 'components/DashboardContainer'

export const Clients = () => {
  const {
    clients,
    openAddClient,
    addClientOpened,
    closeAddClient,
    form,
    onSubmitAddClient,
    formLoading
  } = useClients()

  return (
    <DashboardContainer>
      <Modal
        opened={addClientOpened}
        onClose={closeAddClient}
        title={<Title order={2}>Clients</Title>}
        size={600}
      >
        <form onSubmit={form.onSubmit(onSubmitAddClient)}>
          <Stack>
            <TextInput
              required
              label="Name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
            />

            <SimpleGrid cols={2}>
              <Select
                required
                label="Gender"
                value={form.values.gender}
                data={[
                  {
                    value: 'male',
                    label: 'Male'
                  },
                  {
                    value: 'female',
                    label: 'Female'
                  }
                ]}
                onChange={(gender: Gender) =>
                  form.setFieldValue('gender', gender)
                }
                error={form.errors.gender && 'Choose an option'}
              />

              <DatePicker
                required
                allowFreeInput
                label="Date of birth"
                value={form.values.birthdate}
                onChange={(date) => form.setFieldValue('birthdate', date)}
              />

              <PhoneInput
                required
                label="Phone number"
                value={form.values.phone}
                onChange={(phone) => form.setFieldValue('phone', phone)}
              />

              <TextInput
                required
                label="Email"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.currentTarget.value)
                }
                error={form.errors.email && 'Invalid email'}
              />
            </SimpleGrid>

            <Group position="apart" mt="md">
              <Button
                variant="outline"
                color="red"
                onClick={closeAddClient}
                disabled={formLoading}
              >
                Cancel
              </Button>
              <Button type="submit" loading={formLoading}>
                Add client
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.md
        })}
      >
        <Group position="apart">
          <Title order={1}>Clients</Title>
          <Button onClick={openAddClient} leftIcon={<IconPlus />}>
            Add new client
          </Button>
        </Group>

        <Table mt="md" striped highlightOnHover>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr key={client.id} style={{ cursor: 'pointer' }}>
                <td>
                  <Avatar src={client.avatar} radius="xl" />
                </td>
                <td>{client.name}</td>
                <td>{client.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </DashboardContainer>
  )
}
