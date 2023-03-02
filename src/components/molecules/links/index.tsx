import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'components/atoms'

import { LINKS } from 'utils'

export const Links: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    { LINKS.map(({
      id,
      name,
      url
    }) => (
      <Heading
        key={ id }
        as="h6"
        size="sm"
        ml={ 3 }
        color="white"
      >
        <Link path={ url }>{ name }</Link>
      </Heading>
    )) }
  </Box>
)
