import { Box } from '@chakra-ui/react'
import { Title, Top } from 'components/molecules'

export const Header: React.FC = () => (
  <Box
    as="header"
    display="flex"
    justifyContent="center"
    alignItems="center"
    pr={ 5 }
    mb={ 5 }
  >
    <Title />
    <Top />
  </Box>
)
