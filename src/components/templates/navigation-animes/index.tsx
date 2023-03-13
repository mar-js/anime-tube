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
  const { pathname } = useRouter()
  const { animes } = useNavigationAnimes()
  const {
    items,
    loading,
    hasMore
  } = useInfiniteScroll({
    animes,
    slug: pathname
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
        { loading && <Spinner color="purple.500" size="xl" /> }
        { !hasMore && (
          <Alert status="info">
            <AlertIcon />
            Not more Animes.
          </Alert>
        ) }
      </Grid>
    </Section>
  )
}
