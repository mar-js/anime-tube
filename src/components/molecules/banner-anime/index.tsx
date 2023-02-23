import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'

import { IAnimeDetails } from 'interfaces'

export const BannerAnime: React.FC<IAnimeDetails> = ({
  animeImg,
  animeTitle,
  synopsis,
  type,
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

    bgGradient="linear(to-r, #9022ff, #cfa0ff)"
  >
    <Flex
      w={ {
        base: '100%',
        md: '85%',
        lg: '75%'
      } }
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
        base: 'linear(to-t, #ffffff, #ffffff, #ffffff, #ffffff00)',
        md: 'none'
      } }
      color={ {
        base: 'black',
        md: 'white'
      } }
    >
      <Image
        w={ {
          base: '180px',
          md: '80%'
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
      <Stack
        p={ 5 }
        bgColor={ {
          base: 'white',
          md: 'transparent'
        } }
      >
        <Heading
          as="h3"
          fontSize={ {
            base: '16px',
            md: '18px',
            lg: '20px'
          } }
        >{ animeTitle }</Heading>
        <Text as="span" size="sm">{ type } * { releasedDate }</Text>
        <Text
          fontSize={ {
            base: '12px',
            md: '15px',
            lg: '16px'
          } }
        >{ synopsis }</Text>
      </Stack>
    </Flex>
  </Box>
)
