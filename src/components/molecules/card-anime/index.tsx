import {
  Box,
  Heading,
  Img
} from '@chakra-ui/react'

import { ICardAnime } from 'interfaces'

export const CardAnime: React.FC<ICardAnime> = ({
  animeImg,
  animeTitle,
  isHover
}) => (
  <Box
    w="200px"
    h="250px"
    position="relative"
    boxShadow={ isHover ? '5px 5px 10px #858585' : '' }
    sx={ { '&:hover': { boxShadow: isHover ? '5px 5px 15px #3f3f3f' : '' } } }
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
