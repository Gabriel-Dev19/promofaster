import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingScreen from '../components/parts/LoadingScreen'
import 'antd/dist/antd.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => { setIsLoading(true) })
    router.events.on('routeChangeComplete', () => { setIsLoading(false) })
    window.onload = () => { setIsLoading(false) }
    setIsLoading(false)

    document.body.setAttribute('onselectstart', 'return false')
  }, [router.events])

  useEffect(() => {
    document.querySelector('header nav.on-scroll-static')
      ? (document.body.style.paddingTop = '85px')
      : (document.body.style.paddingTop = '0')
  })

  return(
    <>
      { isLoading && <LoadingScreen /> }
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
