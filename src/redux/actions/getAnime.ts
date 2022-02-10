import { Dispatch } from 'redux'

import { InterfaceGetAnime } from '../../tools/interfaces'

import {
  GET_ANIME,
  GET_ANIME_SUCCESS,
  GET_ANIME_ERROR
} from '../types/getAnime'

export const GET_ANIME_ACTIONS = (id: number) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({ type: GET_ANIME })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
    const DATA: InterfaceGetAnime = await RESPONSE.json()
    return dispatch({
      type: GET_ANIME_SUCCESS,
      payload: { ...DATA }
    })
  } catch (error: string | any) {
    console.error('ERROR IN GET ANIME ACTIONS: ', error.message)

    return dispatch({
      type: GET_ANIME_ERROR,
      payload: error.message
    })
  }
}
