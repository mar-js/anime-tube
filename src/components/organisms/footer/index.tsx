import { Box } from '@chakra-ui/react'
import { Copyright, Stars } from 'components/atoms'

export const Footer: React.FC = () => (
  <Box
    as="footer"
    py={ 5 }
    bgColor="purple.300"
    textAlign="center"
  >
    <Copyright />
    <Stars />
  </Box>
)
