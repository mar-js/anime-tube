import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { Footer, Header } from 'components/organisms'

import 'styles/index.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Header />
    <Component { ...pageProps } />
    <Footer />
  </ChakraProvider>
)

export default App
