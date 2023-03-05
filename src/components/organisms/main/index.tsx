import { PropsWithChildren } from 'react'

import { Box } from '@chakra-ui/react'

export const Main: React.FC<PropsWithChildren> = ({ children }) => (
  <Box as="main" pt={ 5 }>
    { children }
  </Box>
)
