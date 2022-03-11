import { Dispatch } from 'redux'

import { InterfaceGetAnimes } from '../../tools/interfaces'

import {
  GET_ANIMES,
  GET_ANIMES_SUCCESS,
  GET_ANIMES_ERROR
} from '../types/getAnimes'

export const GET_ANIMES_ACTIONS = (page = 1) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: GET_ANIMES })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/top/anime/${page}/bypopularity`)
    const DATA = await RESPONSE.json()
    const { top }: { top: InterfaceGetAnimes[] } = DATA

    return dispatch({
      type: GET_ANIMES_SUCCESS,
      payload: [ ...top.slice(0, 18) ]
    })
  } catch (error: string | any) {
    console.error('ERROR IN GET ANIMES ACTIONS: ', error.message)

    return dispatch({
      type: GET_ANIMES_ERROR,
      payload: error.message
    })
  }
}
