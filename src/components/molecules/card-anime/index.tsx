import {
  Box,
  Heading,
  Img
} from '@chakra-ui/react'

import { IAnimeApiAPi } from 'interfaces'
import Link from 'next/link'

export const CardAnime: React.FC<IAnimeApiAPi> = ({
  animeId,
  animeImg,
  animeTitle
}) => (
  <Link href={ `anime/${animeId}` }>
    <Box
      w="200px"
      h="250px"
      position="relative"
      boxShadow="5px 5px 10px #858585"
      sx={ { '&:hover': { boxShadow: '5px 5px 15px #3f3f3f' } } }
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
  </Link>
)
