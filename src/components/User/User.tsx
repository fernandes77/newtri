import { Avatar, Group, Menu, UnstyledButton } from '@mantine/core'
import { IconCreditCard, IconLogout, IconUser } from '@tabler/icons'

export const User = () => {
  return (
    <Menu width={260} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group spacing={7}>
            <Avatar radius="xl" />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>

        <Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
          Your Profile
        </Menu.Item>

        <Menu.Item icon={<IconCreditCard size={14} stroke={1.5} />}>
          Manage Subscription
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
