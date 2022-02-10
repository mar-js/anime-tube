import { InterfaceGetAnime } from '../../tools/interfaces'

export const GET_ANIME = 'GET_ANIME'
export const GET_ANIME_SUCCESS = 'GET_ANIME_SUCCESS'
export const GET_ANIME_ERROR = 'GET_ANIME_ERROR'
export const RESET_ANIME = 'RESET_ANIME'

interface InterfaceGetAnimeActionsTypes {
  type: typeof GET_ANIME;
}

interface InterfaceResetAnimeActionsTypes {
  type: typeof RESET_ANIME;
}

interface InterfaceGetAnimeSuccessActionsTypes {
  type: typeof GET_ANIME_SUCCESS;
  payload: InterfaceGetAnime;
}

interface InterfaceGetAnimeErrorActionsTypes {
  type: typeof GET_ANIME_ERROR;
  payload: string;
}

export type GetAnimeActionsTypes = InterfaceGetAnimeActionsTypes | InterfaceResetAnimeActionsTypes | InterfaceGetAnimeSuccessActionsTypes | InterfaceGetAnimeErrorActionsTypes
