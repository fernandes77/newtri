import {
  Title,
  Text,
  Button,
  Container,
  Group,
  Box,
  Center
} from '@mantine/core'

export const NotFound = () => {
  return (
    <Center sx={{ height: '100vh' }}>
      <Container>
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            fontWeight: 900,
            fontSize: 220,
            lineHeight: 1,
            marginBottom: theme.spacing.xl * 1.5,
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

            [theme.fn.smallerThan('sm')]: {
              fontSize: 120
            }
          })}
        >
          404
        </Box>
        <Title
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            textAlign: 'center',
            fontWeight: 900,
            fontSize: 38,

            [theme.fn.smallerThan('sm')]: {
              fontSize: 32
            }
          })}
        >
          Oops... page not found.
        </Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          sx={(theme) => ({
            maxWidth: 500,
            margin: 'auto',
            marginTop: theme.spacing.xl,
            marginBottom: theme.spacing.xl * 1.5
          })}
        >
          You may have mistyped the address, or the page has been moved to
          another URL.
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md">
            Take me back to the home page
          </Button>
        </Group>
      </Container>
    </Center>
  )
}
