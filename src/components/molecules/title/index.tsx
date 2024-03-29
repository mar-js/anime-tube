import { Heading } from '@chakra-ui/react'
import { Link } from 'components/atoms'

export const Title: React.FC = () => (
  <Heading
    as="h1"
    size={ {
      base: 'sm',
      md: 'md',
      lg: 'lg'
    } }
    display="flex"
    justifyContent="center"
    alignItems="center"
    py={ 5 }
    px={ 2 }
    color="white"
    bgColor="purple.500"
  >
    <Link path="/">AnimeTube</Link>
  </Heading>
)
