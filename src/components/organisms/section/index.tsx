import { useAnimeDetails } from 'contexts'

import {
  Box,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Stack,
  Text,
  Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { CardAnime } from 'components/molecules'

export const Section: React.FC = () => {
  const {
    details: {
      animeImg,
      animeTitle,
      synopsis,
      episodesList
    }
  } = useAnimeDetails()

  return (
    <Box
      as="section"
      py={ 3 }
      px={ 6 }
    >
      <Flex
        alignItems="center"
        flexDir={ {
          base: 'column-reverse',
          md: 'column-reverse',
          lg: 'row'
        } }
      >
        <CardAnime
          isDetails
          animeImg={ animeImg }
          animeTitle={ animeTitle }
        />
        <Stack
          w={ {
            base: '100%',
            md: '100%',
            lg: '65%'
          } }
          mb={ {
            base: 6,
            md: 6,
            lg: 0
          } }
          pl={ {
            md: 0,
            lg: 10
          } }
        >
          <Heading as="h2">{ animeTitle }</Heading>
          <Text
            fontSize={ {
              base: '12px',
              md: '14px',
              lg: '16px'
            } }
          >{ synopsis || 'This is a movie, there is no description so as not to spoil' }</Text>
        </Stack>
      </Flex>
      { episodesList.length > 0 && (
        <UnorderedList
          my={ 10 }
          listStyleType="none"
        >
          { episodesList.map(({
            episodeId,
            episodeNum,
            episodeUrl
          }) => (
            <ListItem
              key={ episodeId }
              mb={ 2 }
              boxShadow="5px 5px 30px #e2d5ff"
              borderRadius={ 50 }
              sx={ { '&:hover': { boxShadow: '5px 5px 10px #cdb6ff' } } }
            >
              <Link
                href={ episodeUrl }
                target="_blank"
                rel="noreferrer"
                display="flex"
                justifyContent="space-between"
                w="100%"
                h={ {
                  base: '50px',
                  md: '50px',
                  lg: '70px'
                } }
                alignItems="center"
                px={ {
                  base: 5,
                  md: 8,
                  lg: 10
                } }
                fontSize={ {
                  base: '12px',
                  md: '15px',
                  lg: '15px'
                } }
              >
                View episode: { episodeNum }
                <ExternalLinkIcon />
              </Link>
            </ListItem>
          )) }
        </UnorderedList>
      ) }
    </Box>
  )
}
