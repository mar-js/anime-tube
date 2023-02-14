import { createContext, useContext } from 'react'

import { IDataAnime } from 'interfaces'

export const AnimesPopularContext = createContext({} as IDataAnime)
export const useAnimesPopular = (): IDataAnime => useContext(AnimesPopularContext)
