import { InterfaceInitialState, InterfaceGetAnimes } from '../../tools/interfaces'

import {
  GET_ANIMES,
  RESET_ANIMES,
  GET_ANIMES_SUCCESS,
  GET_ANIMES_ERROR,
  GetAnimesActionsTypes
} from '../types/getAnimes'

interface InterfaceReducerGetAnimes extends InterfaceInitialState {
  getAnimes: InterfaceGetAnimes[];
}

export const REDUCER_GET_ANIMES = (state: InterfaceReducerGetAnimes, action: GetAnimesActionsTypes): InterfaceReducerGetAnimes => {
  switch (action.type) {
    case GET_ANIMES:
      return {
        ...state,
        fetching: true
      }
    case RESET_ANIMES:
      return {
        ...state,
        fetching: false,
        getAnimes: []
      }
    case GET_ANIMES_SUCCESS:
      return {
        ...state,
        fetching: false,
        getAnimes: !state.getAnimes ? [ ...action.payload ] : [ ...state.getAnimes, ...action.payload ]
      }
    case GET_ANIMES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
