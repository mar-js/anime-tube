import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { useStore } from '../redux'

import { GlobalStyles } from '../assets/styles'
import { Layout } from '../layouts'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../layouts/slider-animes-for-day/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  const STORE = useStore(pageProps.initialReduxState)

  return (
    <Provider store={ STORE }>
      <GlobalStyles />
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </Provider>
  )
}
