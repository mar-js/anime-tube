
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GET_ANIMES_FOR_DAY_ACTIONS } from '../../redux/actions/getAnimesForDay'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

import { Helmet } from 'react-helmet'
import { SliderAnimesForDay } from '../../layouts/slider-animes-for-day'
import { Main } from '../../layouts/main'

export const Home: React.FC = () => {
  const DISPATCH = useDispatch()
  const GET_ANIMES_FOR_DAY = () => DISPATCH(GET_ANIMES_FOR_DAY_ACTIONS())

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIME })
    DISPATCH({ type: RESET_SEARCH_ANIMES })
    GET_ANIMES_FOR_DAY()

    return () => null
  }, [])

  return (
    <>
      <Helmet>
        <title>Home | AnimeTube</title>
        <meta name="description" content="You will see the animes that happen today (in japan) and the most popular animes" />
      </Helmet>
      <SliderAnimesForDay />
      <Main />
    </>
  )
}
