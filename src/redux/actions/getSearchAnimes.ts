import { Dispatch } from 'redux'

import { InterfaceGetAnimes } from '../../tools/interfaces'

import {
  GET_SEARCH_ANIMES,
  GET_SEARCH_ANIMES_SUCCESS,
  GET_SEARCH_ANIMES_ERROR
} from '../types/getSearchAnimes'

export const GET_SEARCH_ANIMES_ACTIONS = (page: number, query: string) => async (dispatch: Dispatch): Promise<any> => {
  dispatch({
    type: GET_SEARCH_ANIMES,
    payload: query
  })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}&order_by=title&sort=asc&limit=18`)
    const DATA = await RESPONSE.json()
    const { results }: { results: InterfaceGetAnimes[] } = DATA

    return dispatch({
      type: GET_SEARCH_ANIMES_SUCCESS,
      payload: [ ...results ]
    })
  } catch (error: string | any) {
    console.error('ERROR IN GET SEARCH ANIMES ACTIONS: ', error.message)

    return dispatch({
      type: GET_SEARCH_ANIMES_ERROR,
      payload: error.message
    })
  }
}
