import { useAnimesPopular } from 'contexts'

import { GridItem } from '@chakra-ui/react'
import { AnimePopular, Slider } from 'components/molecules'

export const Aside: React.FC = () => {
  const { animes } = useAnimesPopular()

  return (
    <GridItem
      as="aside"
      area="aside"
      overflow="hidden"
    >
      <Slider>
        { animes?.map((anime) => (
          <AnimePopular key={ anime.animeId } { ...anime } />
        )) }
      </Slider>
    </GridItem>
  )
}
