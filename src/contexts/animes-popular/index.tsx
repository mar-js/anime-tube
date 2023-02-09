import { createContext, useContext } from 'react'

import { IAnimesPopularModel } from 'interfaces'

export const AnimesPopularContext = createContext({} as IAnimesPopularModel)
export const useAnimesPopular = (): IAnimesPopularModel => useContext(AnimesPopularContext)
