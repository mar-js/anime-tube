import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

import { InterfaceGetAnime, InterfaceInitialState } from '../../tools/interfaces'

import Head from 'next/head'
import { Section } from '../../layouts/section'
import { LoaderLo } from '../../components/loader-lo'
import { DetailsAnime } from '../../components/details-anime'

interface InterfaceUseSelectorPage extends InterfaceInitialState {
  getAnime: InterfaceGetAnime;
}

// interface InterfaceUseSelectorStatic {
//   getAnimesForDay: InterfaceAnimesForDay[];
// }

// const { getAnimesForDay }: InterfaceUseSelectorStatic = useSelector((state: RootState) => state.stateAnimesForDay)

const Anime: NextPage = () => {
  const DISPATCH = useDispatch()
  const { fetching, getAnime }: InterfaceUseSelectorPage = useSelector((state: RootState) => state.stateGetAnime)

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIMES_FOR_DAY })
    DISPATCH({ type: RESET_ANIMES })
    DISPATCH({ type: RESET_SEARCH_ANIMES })

    return () => null
  }, [])

  return (
    <>
      <Head>
        <title>Anime | AnimeTube</title>
      </Head>
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
    </>
  )
}

export default Anime
