import { Box } from '@chakra-ui/react'
import { Links } from '../links'
import { Search } from '../search'

export const Top: React.FC = () => (
  <Box
    w="100%"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    bgColor="purple.300"
    py={ 2 }
    px={ 12 }
    borderBottomRightRadius={ 50 }
  >
    <Search />
    <Links />
  </Box>
)
