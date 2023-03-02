import { useAnimeHome } from 'contexts'

import { useGetAnimeRandom, useResultSearchAnime } from 'hooks'

import { Box } from '@chakra-ui/react'
import { BannerAnime, ContainerSlider } from 'components/molecules'

export const Main: React.FC = () => {
  const {
    animePopular,
    moviesAnime,
    newAnime
  } = useAnimeHome()
  const { result } = useResultSearchAnime()
  const { animeRandom } = useGetAnimeRandom()

  return (
    <Box as="main" pt={ 5 }>
      { result && (
        <ContainerSlider { ...result } />
      ) }
      <ContainerSlider { ...newAnime } />
      <ContainerSlider { ...animePopular } />
      { animeRandom && <BannerAnime { ...animeRandom } /> }
      <ContainerSlider { ...moviesAnime } />
    </Box>
  )
}
