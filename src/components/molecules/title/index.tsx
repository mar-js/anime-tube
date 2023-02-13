import { Heading } from '@chakra-ui/react'
import { Link } from 'components/atoms'

export const Title: React.FC = () => (
  <Heading
    h="90px"
    as="h1"
    size="lg"
    display="flex"
    justifyContent="center"
    alignItems="center"
    color="white"
    bgColor="purple.500"
    borderBottomRightRadius={ 25 }
  >
    <Link
      path="/"
      text="AnimeTube"
    />
  </Heading>
)
