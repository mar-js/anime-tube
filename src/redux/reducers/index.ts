import { combineReducers } from 'redux'

import { REDUCER_GET_ANIMES_FOR_DAY } from './getAnimesForDay'
import { REDUCER_GET_ANIMES } from './getAnimes'
import { REDUCER_GET_SEARCH_ANIMES } from './getSearchAnimes'
import { REDUCER_GET_ANIME } from './getAnime'

export const ROOT_REDUCERS = combineReducers({
  stateAnimesForDay: REDUCER_GET_ANIMES_FOR_DAY,
  stateGetAnimes: REDUCER_GET_ANIMES,
  stateGetSearchAnimes: REDUCER_GET_SEARCH_ANIMES,
  stateGetAnime: REDUCER_GET_ANIME
})

export type RootState = ReturnType<typeof ROOT_REDUCERS>
