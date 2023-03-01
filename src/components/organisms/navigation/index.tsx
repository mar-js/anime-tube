import { useRouter } from 'next/router'

import { Box } from '@chakra-ui/react'
import { Links, Search } from 'components/molecules'

export const Navigation: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Box
      as="nav"
      w="100%"
      h={ {
        base: '100%',
        md: 'auto',
        lg: '60px'
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
        md: 6,
        lg: 12
      } }
      borderBottomRightRadius={ { md: 50 } }
    >
      { pathname === '/' && <Search /> }
      <Links />
    </Box>
  )
}
