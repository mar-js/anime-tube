import { useNavigationAnimes } from 'contexts'

import { Section } from 'components/organisms'
import { Link } from 'components/atoms'
import { CardAnime } from 'components/molecules'
import { Grid, GridItem } from '@chakra-ui/react'

export const LayoutNavigationAnimes: React.FC = () => {
  const { animes } = useNavigationAnimes()

  return (
    <Section>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={ 2 }>
        { animes?.map(anime => (
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
      </Grid>
    </Section>
  )
}
