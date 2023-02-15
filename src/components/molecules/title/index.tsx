import { Heading } from '@chakra-ui/react'
import { Link } from 'components/atoms'

export const Title: React.FC = () => (
  <Heading
    as="h1"
    size="lg"
    display="flex"
    justifyContent="center"
    alignItems="center"
    py={ 5 }
    px={ 2 }
    color="white"
    bgColor="purple.500"
  >
    <Link
      path="/"
      text="AnimeTube"
    />
  </Heading>
)
