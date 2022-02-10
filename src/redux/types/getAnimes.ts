import { InterfaceGetAnimes } from '../../tools/interfaces'

export const GET_ANIMES = 'GET_ANIMES'
export const GET_ANIMES_SUCCESS = 'GET_ANIMES_SUCCESS'
export const GET_ANIMES_ERROR = 'GET_ANIMES_ERROR'
export const RESET_ANIMES = 'RESET_ANIMES'

interface InterfaceGetAnimesActionsTypes {
  type: typeof GET_ANIMES;
}

interface InterfaceResetAnimesActionsTypes {
  type: typeof RESET_ANIMES;
}

interface InterfaceGetAnimesSuccessActionsTypes {
  type: typeof GET_ANIMES_SUCCESS;
  payload: InterfaceGetAnimes[];
}

interface InterfaceGetAnimesErrorActionsTypes {
  type: typeof GET_ANIMES_ERROR;
  payload: string;
}

export type GetAnimesActionsTypes = InterfaceGetAnimesActionsTypes | InterfaceResetAnimesActionsTypes | InterfaceGetAnimesSuccessActionsTypes | InterfaceGetAnimesErrorActionsTypes
