import { PropsWithChildren } from 'react'

import { Box } from '@chakra-ui/react'

export const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <Box
    as="section"
    py={ 4 }
    px={ 6 }
  >
    { children }
  </Box>
)
