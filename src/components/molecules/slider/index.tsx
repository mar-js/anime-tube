import { PropsWithChildren } from 'react'

import { Box } from '@chakra-ui/react'

export const Slider: React.FC<PropsWithChildren> = ({ children }) => (
  <Box
    w="100%"
    position="relative"
    animation="slider 50s infinite linear"
    sx={ {
      '@keyframes slider': {
        '0% ': { top: '0' },
        '100%': { top: '-4640px' }
      }
    } }
  >
    { children }
  </Box>
)
