import {
  Box,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { Link } from 'components/atoms'

import { IAnimeApi } from 'interfaces'

export const BannerAnime: React.FC<IAnimeApi> = ({
  animeId,
  animeImg,
  animeTitle,
  releasedDate
}) => (
  <Box
    w="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={ {
      base: '50px 0 0',
      md: '50px 0'
    } }

    bgGradient={ {
      base: 'linear(to-b, #9022ff, #ab57ff, #cfa0ff)',
      md: 'linear(to-r, #9022ff, #ab57ff, #cfa0ff)'
    } }
  >
    <Link
      path={ `anime/${animeId}` }
      w={ {
        base: '100%',
        md: '85%',
        lg: '65%'
      } }
      color={ {
        base: 'black',
        md: 'white'
      } }
    >
      <Flex
        w="100%"
        flexDir={ {
          base: 'column',
          md: 'row'
        } }
        p={ 3 }
        bgColor={ {
          base: 'transparent',
          md: 'blackAlpha.500'
        } }
        bgGradient={ {
          base: 'linear(to-t, #ffffff, #ffffff, transparent)',
          md: 'none'
        } }
      >
        <Image
          w={ {
            base: '180px',
            md: '300px'
          } }
          h={ {
            base: '100%',
            md: '300px'
          } }
          mt="-25px"
          mx={ {
            base: 6,
            md: 0
          } }
          src={ animeImg }
          alt={ animeTitle }
        />
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="start"
          p={ 5 }
          bgColor={ {
            base: 'white',
            md: 'transparent'
          } }
        >
          <Heading
            as="h3"
            mb={ 2 }
            fontSize={ {
              base: '16px',
              md: '18px',
              lg: '20px'
            } }
          >{ animeTitle }</Heading>
          <Text
            fontSize={ {
              base: '14px',
              md: '16px',
              lg: '18px'
            } }
          >Release Date: { releasedDate }</Text>
        </Flex>
      </Flex>
    </Link>
  </Box>
)
