import { Box } from '@chakra-ui/react'
import { Links } from 'components/molecules'

export const Navigation: React.FC = () => (
  <Box
    as="nav"
    w="90%"
    h="100%"
    pt={ 16 }
    bgColor="purple.900"
  >
    <Links />
  </Box>
)
