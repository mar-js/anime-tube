import { InterfaceAnimesForDay } from '../../tools/interfaces'

export const GET_ANIMES_FOR_DAY = 'GET_ANIMES_FOR_DAY'
export const GET_ANIMES_FOR_DAY_SUCCESS = 'GET_ANIMES_FOR_DAY_SUCCESS'
export const GET_ANIMES_FOR_DAY_ERROR = 'GET_ANIMES_FOR_DAY_ERROR'
export const RESET_ANIMES_FOR_DAY = 'RESET_ANIMES_FOR_DAY'

interface InterfaceAnimesForDayActionsTypes {
  type: typeof GET_ANIMES_FOR_DAY;
}

interface InterfaceResetAnimesForDayActionsTypes {
  type: typeof RESET_ANIMES_FOR_DAY;
}

interface InterfaceAnimesForDaySuccessActionsTypes {
  type: typeof GET_ANIMES_FOR_DAY_SUCCESS;
  payload: InterfaceAnimesForDay[];
}

interface InterfaceAnimesForDayErrorActionsTypes {
  type: typeof GET_ANIMES_FOR_DAY_ERROR;
  payload: string;
}

export type AnimesForDayActionsTypes = InterfaceAnimesForDayActionsTypes | InterfaceResetAnimesForDayActionsTypes | InterfaceAnimesForDaySuccessActionsTypes | InterfaceAnimesForDayErrorActionsTypes
