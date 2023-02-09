import NextLink from 'next/link'

import { Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

export const Title: React.FC = () => (
  <Heading
    as="h1"
    size="xl"
    color="purple.300"
  >
    <Link as={ NextLink } href="/">
      AnimeTube
    </Link>
  </Heading>
)
