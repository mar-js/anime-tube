import { Box, Heading } from '@chakra-ui/react'
import { Slider } from '../slider'

import { IContainerSlider } from 'interfaces'

export const ContainerSlider: React.FC<IContainerSlider> = ({ title, animes }) => (
  <Box w="100%" mb={ 10 }>
    <Heading
      as="h2"
      size="md"
      mb={ 3 }
      color="gray.500"
    >
      { title }:
    </Heading>
    <Slider animes={ animes } />
  </Box>
)
