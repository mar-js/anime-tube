import { InterfaceGetAnimes } from '../../tools/interfaces'

export const GET_SEARCH_ANIMES = 'GET_SEARCH_ANIMES'
export const GET_SEARCH_ANIMES_SUCCESS = 'GET_SEARCH_ANIMES_SUCCESS'
export const GET_SEARCH_ANIMES_ERROR = 'GET_SEARCH_ANIMES_ERROR'
export const RESET_SEARCH_ANIMES = 'RESET_SEARCH_ANIMES'

interface InterfaceGetSearchAnimesActionsTypes {
  type: typeof GET_SEARCH_ANIMES;
  payload: string;
}

interface InterfaceResetGetSearchAnimesActionsTypes {
  type: typeof RESET_SEARCH_ANIMES;
}

interface InterfaceGetSearchAnimesSuccessActionsTypes {
  type: typeof GET_SEARCH_ANIMES_SUCCESS;
  payload: InterfaceGetAnimes[];
}

interface InterfaceGetSearchAnimesErrorActionsTypes {
  type: typeof GET_SEARCH_ANIMES_ERROR;
  payload: string;
}

export type GetSearchAnimesActionsTypes = InterfaceGetSearchAnimesActionsTypes | InterfaceResetGetSearchAnimesActionsTypes | InterfaceGetSearchAnimesSuccessActionsTypes | InterfaceGetSearchAnimesErrorActionsTypes
