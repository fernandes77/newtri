import type { AppProps } from 'next/app'
import { MantineProviders } from 'utils/mantine'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProviders>
      <Component {...pageProps} />
    </MantineProviders>
  )
}

export default MyApp
