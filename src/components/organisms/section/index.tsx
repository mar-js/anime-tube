import { useAnimeDetails } from 'contexts'

import {
  Box,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Stack,
  Text
} from '@chakra-ui/react'
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

  console.log(episodesList)

  return (
    <Box as="section">
      <Flex>
        <CardAnime
          animeImg={ animeImg }
          animeTitle={ animeTitle }
        />
        <Stack>
          <Heading as="h2">{ animeTitle }</Heading>
          <Text fontSize="lg">{ synopsis }</Text>
        </Stack>
      </Flex>
      { episodesList.length > 0 && (
        <UnorderedList>
          { episodesList.map(({
            episodeId,
            episodeNum,
            episodeUrl
          }) => (
            <ListItem key={ episodeId }>
              <a href={ episodeUrl } target="_blank" rel="noreferrer">
              Episode: { episodeNum }
              </a>
            </ListItem>
          )) }
        </UnorderedList>
      ) }
    </Box>
  )
}
