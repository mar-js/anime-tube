import { createContext, useContext } from 'react'

import { IAnimeApiHome } from 'interfaces'

export const AnimeHomeContext = createContext({} as IAnimeApiHome)
export const useAnimeHome = (): IAnimeApiHome => useContext(AnimeHomeContext)
