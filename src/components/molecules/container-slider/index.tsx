import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'
import { Slider } from '../slider'
import {
  Error,
  Link,
  Progress
} from 'components/atoms'

import { IDataAnime } from 'interfaces'

export const ContainerSlider: React.FC<IDataAnime> = ({
  loading,
  title,
  animes,
  error
}) => (
  <Flex
    w="100%"
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    my={ 10 }
  >
    <Box
      w={ {
        base: '100%',
        md: '95%',
        lg: '90%'
      } }
      px={ {
        base: 2,
        md: 4,
        lg: 6
      } }
    >
      <Link path={ title.url }>
        <Heading
          as="h2"
          size="lg"
          mb={ 1 }
          color="gray.500"
        >
          { title.text }:
        </Heading>
      </Link>
      <Box
        w="100%"
        h="4px"
        mb={ 4 }
        bgGradient="linear(to-r, #5e4dff, #e2d5ff)"
      />
      { loading === 'loading' && <Progress /> }
      { loading === 'ok' && <Slider animes={ animes } /> }
      { loading === 'fail' && <Error title={ title.text } error={ error } /> }
    </Box>
  </Flex>
)
