import {
  Box,
  Heading,
  Img
} from '@chakra-ui/react'

import { IAnime } from 'interfaces'

export const CardAnime: React.FC<IAnime> = ({ animeImg, animeTitle }) => (
  <Box
    w="200px"
    h="250px"
    position="relative"
    boxShadow="5px 5px 10px #e1e1e1"
  >
    <Img
      w="100%"
      h="100%"
      src={ animeImg }
      alt={ animeTitle }
    />
    <Heading
      as="span"
      w="100%"
      position="absolute"
      bottom="0"
      color="white"
      p={ 2 }
      fontSize="10px"
      bgColor="blackAlpha.700"
    >{ animeTitle }</Heading>
  </Box>
)
