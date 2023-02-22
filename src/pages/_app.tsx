import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { AnimeSearchProvider } from 'providers'

import { Footer, Header } from 'components/organisms'

import 'styles/index.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <AnimeSearchProvider>
      <Header />
      <Component { ...pageProps } />
      <Footer />
    </AnimeSearchProvider>
  </ChakraProvider>
)

export default App
