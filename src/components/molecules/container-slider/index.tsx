import { Box, Heading } from '@chakra-ui/react'
import { Slider } from '../slider'
import { Error, Progress } from 'components/atoms'

import { IDataAnime } from 'interfaces'

export const ContainerSlider: React.FC<IDataAnime> = ({
  loading,
  title,
  animes,
  error
}) => (
  <Box w="100%" mb={ 10 }>
    <Heading
      as="h2"
      size="md"
      mb={ 3 }
      color="gray.500"
    >
      { title }:
    </Heading>
    { loading === 'loading' && <Progress /> }
    { loading === 'ok' && <Slider animes={ animes } /> }
    { loading === 'fail' && <Error title={ title } error={ error } /> }
  </Box>
)
