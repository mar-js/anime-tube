import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'components/atoms'

const LINKS = [
  {
    id: 1,
    name: 'Home',
    url: '/'
  },
  {
    id: 2,
    name: 'Popular',
    url: '/popular'
  },
  {
    id: 3,
    name: 'Movies',
    url: '/movies'
  }
]

export const Links: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
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
        mb={ 5 }
        color="white"
      >
        <Link
          path={ url }
          text={ name }
        />
      </Heading>
    )) }
  </Box>
)
