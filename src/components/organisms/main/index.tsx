import { useAnimeHome, useAnimeSearch } from 'contexts'

import { Box } from '@chakra-ui/react'
import { ContainerSlider } from 'components/molecules'

export const Main: React.FC = () => {
  const {
    animePopular,
    moviesAnime,
    newAnime
  } = useAnimeHome()
  const { result } = useAnimeSearch()

  return (
    <Box
      as="main"
      pt={ 5 }
      pl={ 5 }
    >
      { result && (
        <ContainerSlider { ...result } />
      ) }
      <ContainerSlider { ...newAnime } />
      <ContainerSlider { ...animePopular } />
      <ContainerSlider { ...moviesAnime } />
    </Box>
  )
}
