import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

import { InterfaceGetAnime, InterfaceInitialState } from '../../tools/interfaces'

import { Section } from '../../layouts/section'
import { LoaderLo } from '../../components/loader-lo'
import { DetailsAnime } from '../../components/details-anime'

interface InterfaceUseSelector extends InterfaceInitialState {
  getAnime: InterfaceGetAnime;
}

export const Anime: React.FC = () => {
  const DISPATCH = useDispatch()

  const { fetching, getAnime }: InterfaceUseSelector = useSelector((state: RootState) => state.stateGetAnime)

  useEffect((): any => {
    document.title = 'Anime | AnimeTube'

    return () => null
  }, [])

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIMES_FOR_DAY })
    DISPATCH({ type: RESET_ANIMES })
    DISPATCH({ type: RESET_SEARCH_ANIMES })

    return () => null
  }, [])

  return (
    <Section>
      { fetching || fetching === undefined ? (
        <LoaderLo />
      ) : (
        <DetailsAnime
          mal_id={ getAnime.mal_id }
          image_url={ getAnime.image_url }
          trailer_url={ getAnime.trailer_url }
          title={ getAnime.title }
          title_japanese={ getAnime.title_japanese }
          episodes={ getAnime.episodes }
          synopsis={ getAnime.synopsis }
        />
      ) }
    </Section>
  )
}
