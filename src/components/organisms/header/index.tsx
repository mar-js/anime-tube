import { Box } from '@chakra-ui/react'
import { Title } from 'components/molecules'
import { Navigation } from '../navigation'

export const Header: React.FC = () => (
  <Box
    w="100%"
    as="header"
    display={ {
      base: 'inline-block',
      md: 'flex'
    } }
    justifyContent="center"
    alignItems="center"
    pr={ {
      base: 0,
      md: 3
    } }
  >
    <Title />
    <Navigation />
  </Box>
)
