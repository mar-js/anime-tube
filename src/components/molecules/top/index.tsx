import { Box } from '@chakra-ui/react'
import { Links } from '../links'
import { Search } from '../search'

export const Top: React.FC = () => (
  <Box
    w="100%"
    h={ {
      base: '100%',
      md: 'auto'
    } }
    display="flex"
    flexDirection={ {
      base: 'column',
      md: 'row'
    } }
    justifyContent="space-between"
    alignItems="center"
    bgColor="purple.300"
    py={ {
      base: 3,
      md: 3,
      lg: 2
    } }
    px={ {
      base: 3,
      md: 3,
      lg: 12
    } }
    borderBottomRightRadius={ { md: 50 } }
  >
    <Search />
    <Links />
  </Box>
)
