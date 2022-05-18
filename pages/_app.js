import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingScreen from '../components/LoadingScreen'
import 'antd/dist/antd.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true)
    })
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false)
    })
    window.onload = () => {
      setIsLoading(false)
    }
    setIsLoading(false)
  }, [router.events])

  return(
    <>
      {
        isLoading &&
        <LoadingScreen />
      }
      <Component {...pageProps} />
    </>
  )
}
