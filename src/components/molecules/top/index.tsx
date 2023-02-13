import { Box } from '@chakra-ui/react'
import { Search } from '../search'

export const Top: React.FC = () => (
  <Box
    w="100%"
    h="60%"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    bgColor="purple.100"
    pl={ 5 }
    borderBottomRightRadius={ 50 }
  >
    <Search />
  </Box>
)
