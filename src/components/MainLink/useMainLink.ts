import { useRouter } from 'next/router'

export const useMainLink = () => {
  const router = useRouter()

  const location = router.asPath

  return { location }
}
