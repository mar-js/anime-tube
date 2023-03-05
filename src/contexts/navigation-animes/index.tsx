import { createContext, useContext } from 'react'

import { IDataAnime } from 'interfaces'

export const NavigationAnimesContext = createContext({} as IDataAnime)
export const useNavigationAnimes = (): IDataAnime => useContext(NavigationAnimesContext)
