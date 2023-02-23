import { Box } from '@chakra-ui/react'
import { Title, Top } from 'components/molecules'

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
    <Top />
  </Box>
)
