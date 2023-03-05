import { useAnimeHome } from 'contexts'

import { useGetAnimeRandom, useResultSearchAnime } from 'hooks'

import { Main } from 'components/organisms'
import { BannerAnime, ContainerSlider } from 'components/molecules'

export const LayoutHome: React.FC = () => {
  const {
    animePopular,
    moviesAnime,
    newAnime
  } = useAnimeHome()
  const { result } = useResultSearchAnime()
  const { animeRandom } = useGetAnimeRandom()

  return (
    <Main>
      { result && (
        <ContainerSlider { ...result } />
      ) }
      <ContainerSlider { ...newAnime } />
      <ContainerSlider { ...animePopular } />
      { animeRandom && <BannerAnime { ...animeRandom } /> }
      <ContainerSlider { ...moviesAnime } />
    </Main>
  )
}
