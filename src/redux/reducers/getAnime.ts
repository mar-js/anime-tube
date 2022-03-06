import { InterfaceInitialState, InterfaceGetAnime } from '../../tools/interfaces'

import {
  GET_ANIME,
  RESET_ANIME,
  GET_ANIME_SUCCESS,
  GET_ANIME_ERROR,
  GetAnimeActionsTypes
} from '../types/getAnime'

interface InterfaceReducerGetAnime extends InterfaceInitialState {
  getAnime: InterfaceGetAnime | any;
}

export const REDUCER_GET_ANIME = (state: InterfaceReducerGetAnime, action: GetAnimeActionsTypes): InterfaceReducerGetAnime => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        fetching: true
      }
    case RESET_ANIME:
      return {
        ...state,
        fetching: false,
        getAnime: {}
      }
    case GET_ANIME_SUCCESS:
      return {
        ...state,
        fetching: false,
        getAnime: { ...action.payload }
      }
    case GET_ANIME_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
