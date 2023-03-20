import { useRouter } from 'next/router'

import { useNavigationAnimes } from 'contexts'

import { useInfiniteScroll } from 'hooks'

import { Section } from 'components/organisms'
import { Link } from 'components/atoms'
import { CardAnime } from 'components/molecules'
import {
  Alert,
  AlertIcon,
  Grid,
  GridItem,
  Spinner
} from '@chakra-ui/react'

export const LayoutNavigationAnimes: React.FC = () => {
  const { pathname, query } = useRouter()
  const { animes } = useNavigationAnimes()
  const {
    items,
    loading,
    hasMore
  } = useInfiniteScroll({
    animes,
    slug: pathname.search('/search') === 0 ? '/search' : pathname,
    search: query
  })

  return (
    <Section>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={ 2 }>
        { items.map(anime => (
          <GridItem
            key={ anime.animeId }
            w="100%"
            h="auto"
          >
            <Link path={ `anime/${anime.animeId}` }>
              <CardAnime { ...anime } />
            </Link>
          </GridItem>
        )) }
        { hasMore ? (
          <GridItem
            w="100%"
            h="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            { loading && (
              <Spinner
                size="xl"
                thickness="5px"
                color="purple.500"
              />
            ) }
          </GridItem>
        ) : (
          <Alert
            w={ {
              base: '100%',
              md: '200px',
              lg: '200px'
            } }
            status="info"
            mx="auto"
          >
            <AlertIcon />
              Not more Animes.
          </Alert>
        ) }
      </Grid>
    </Section>
  )
}
