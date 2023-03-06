import { useState } from 'react'

import { useAnimeDetails } from 'contexts'

import {
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Stack,
  Text,
  Link,
  Button
} from '@chakra-ui/react'
import {
  ExternalLinkIcon,
  TriangleDownIcon,
  TriangleUpIcon
} from '@chakra-ui/icons'
import { CardAnime } from 'components/molecules'
import { Section } from 'components/organisms'

export const LayoutAnime: React.FC = () => {
  const [ orderAsc, setOrderAsc ] = useState<boolean>(false)
  const {
    details: {
      animeImg,
      animeTitle,
      synopsis,
      episodesList
    }
  } = useAnimeDetails()

  const handleChangeOrderList = () => setOrderAsc(!orderAsc)

  return (
    <Section>
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
            lg: '70%'
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
      <Button
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={ 10 }
        mx="auto"
        colorScheme="cyan"
        color="white"
        lineHeight="normal"
        onClick={ handleChangeOrderList }
      >
        Order List:  { orderAsc ? <TriangleDownIcon /> : <TriangleUpIcon /> }
      </Button>
      { episodesList.length > 0 && (
        <UnorderedList
          mb={ 10 }
          ml={ 0 }
          listStyleType="none"
          display="flex"
          flexDir={ orderAsc ? 'column-reverse' : 'column' }
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
    </Section>
  )
}
