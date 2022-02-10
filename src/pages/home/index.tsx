
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GET_ANIMES_FOR_DAY_ACTIONS } from '../../redux/actions/getAnimesForDay'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

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
      <SliderAnimesForDay />
      <Main />
    </>
  )
}
