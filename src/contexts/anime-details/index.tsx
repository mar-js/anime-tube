import { createContext, useContext } from 'react'

import { IAnimeApiDetails } from 'interfaces'

export const AnimeDetailsContext = createContext({} as IAnimeApiDetails)
export const useAnimeDetails = (): IAnimeApiDetails => useContext(AnimeDetailsContext)
