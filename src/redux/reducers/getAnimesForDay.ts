import { InterfaceInitialState, InterfaceAnimesForDay } from '../../tools/interfaces'

import {
  GET_ANIMES_FOR_DAY,
  RESET_ANIMES_FOR_DAY,
  GET_ANIMES_FOR_DAY_SUCCESS,
  GET_ANIMES_FOR_DAY_ERROR,
  AnimesForDayActionsTypes
} from '../types/animesForDay'

interface InterfaceReducerAnimesForDay extends InterfaceInitialState {
  animesForDay: InterfaceAnimesForDay[];
}

export const REDUCER_GET_ANIMES_FOR_DAY = (state: InterfaceReducerAnimesForDay, action: AnimesForDayActionsTypes): InterfaceReducerAnimesForDay => {
  switch (action.type) {
    case GET_ANIMES_FOR_DAY:
      return {
        ...state,
        fetching: true
      }
    case RESET_ANIMES_FOR_DAY:
      return {
        ...state,
        fetching: false,
        animesForDay: []
      }
    case GET_ANIMES_FOR_DAY_SUCCESS:
      return {
        ...state,
        fetching: false,
        animesForDay: [ ...action.payload ]
      }
    case GET_ANIMES_FOR_DAY_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return { ...state }
  }
}
