import { useEffect } from 'react'

import { useAnimeHome, useAnimeSearch } from 'contexts'

import { Box } from '@chakra-ui/react'
import { BannerAnime, ContainerSlider } from 'components/molecules'

export const Main: React.FC = () => {
  const {
    animePopular,
    moviesAnime,
    newAnime
  } = useAnimeHome()
  const { result, setResult } = useAnimeSearch()

  useEffect(() => {
    if (result && !result?.animes?.length) {
      setResult({
        title: 'Result',
        loading: 'fail',
        error: 'Not result'
      })
    }

  }, [ result ])

  return (
    <Box as="main" pt={ 5 }>
      { result && (
        <ContainerSlider { ...result } />
      ) }
      <ContainerSlider { ...newAnime } />
      <BannerAnime
        { ...animePopular.animes[0] }
        synopsis="Hora de estreno en Latinoamérica: Domingos a la 1:30 AM PST (Hora del Pacífico) Hora de estreno en España: Domingos a las 09:30 (Hora española peninsular) Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a sucar los mares y se convertirá en un capitán dispuesto a no darse por vencido jamás hasta hacerse con el mayor tesoro de la historia: el legendario One Piece."
      />
      <ContainerSlider { ...animePopular } />
      <ContainerSlider { ...moviesAnime } />
    </Box>
  )
}
