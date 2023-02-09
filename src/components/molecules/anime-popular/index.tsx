import { Box, Img } from '@chakra-ui/react'

import { IAnimePopular } from 'interfaces'

export const AnimePopular: React.FC<IAnimePopular> = ({ animeImg, animeTitle }) => (
  <Box w="100%">
    <Img
      w="100%"
      src={ animeImg }
      alt={ animeTitle }
    />
  </Box>
)
