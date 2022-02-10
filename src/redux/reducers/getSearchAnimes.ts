import { InterfaceInitialState, InterfaceGetAnimes } from '../../tools/interfaces'

import {
  GET_SEARCH_ANIMES,
  RESET_SEARCH_ANIMES,
  GET_SEARCH_ANIMES_SUCCESS,
  GET_SEARCH_ANIMES_ERROR,
  GetSearchAnimesActionsTypes
} from '../types/getSearchAnimes'

interface InterfaceReducerGetSearchAnimes extends InterfaceInitialState {
  getSearchAnimes: InterfaceGetAnimes[];
  search?: string;
}

export const REDUCER_GET_SEARCH_ANIMES = (state: InterfaceReducerGetSearchAnimes, action: GetSearchAnimesActionsTypes): InterfaceReducerGetSearchAnimes => {
  switch (action.type) {
    case GET_SEARCH_ANIMES:
      return {
        ...state,
        fetching: true,
        search: action.payload
      }
    case RESET_SEARCH_ANIMES:
      return {
        ...state,
        fetching: false,
        search: '',
        getSearchAnimes: []
      }
    case GET_SEARCH_ANIMES_SUCCESS:
      return {
        ...state,
        fetching: false,
        getSearchAnimes: !state.getSearchAnimes ? [ ...action.payload ] : [ ...state.getSearchAnimes, ...action.payload ]
      }
    case GET_SEARCH_ANIMES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
