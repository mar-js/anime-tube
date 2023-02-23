import type { AppProps } from 'next/app'

import { THEME } from 'theme'

import { ChakraProvider } from '@chakra-ui/react'

import { AnimeSearchProvider } from 'providers'

import { Footer, Header } from 'components/organisms'

import '@fontsource/raleway/600.css'
import '@fontsource/vazir/400.css'

import 'styles/index.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={ THEME }>
    <AnimeSearchProvider>
      <Header />
      <Component { ...pageProps } />
      <Footer />
    </AnimeSearchProvider>
  </ChakraProvider>
)

export default App
