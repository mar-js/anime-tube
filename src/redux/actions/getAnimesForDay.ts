import { Dispatch } from 'redux'

import {
  GET_ANIMES_FOR_DAY,
  GET_ANIMES_FOR_DAY_SUCCESS,
  GET_ANIMES_FOR_DAY_ERROR
} from '../types/animesForDay'

import { date } from '../../tools/valueDay'

export const GET_ANIMES_FOR_DAY_ACTIONS = () => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: GET_ANIMES_FOR_DAY })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/schedule/${date}`)
    const DATA = await RESPONSE.json()

    return dispatch({
      type: GET_ANIMES_FOR_DAY_SUCCESS,
      payload: [ ...DATA[date] ]
    })
  } catch (error: string | any) {
    console.error('ERROR IN GET ANIMES FOR DAY ACTIONS: ', error.message)

    return dispatch({
      type: GET_ANIMES_FOR_DAY_ERROR,
      payload: error.message
    })
  }
}
