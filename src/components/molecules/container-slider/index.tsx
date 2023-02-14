import { Box, Heading } from '@chakra-ui/react'
import { Slider } from '../slider'

export const ContainerSlider: React.FC = () => (
  <Box w="100%">
    <Heading
      as="h2"
      size="md"
      mb={ 3 }
      color="gray.500"
    >
      Animes Popular:
    </Heading>
    <Slider />
  </Box>
)
