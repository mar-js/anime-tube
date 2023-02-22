import { createContext, useContext } from 'react'

import { IAnimeApiSearch } from 'interfaces'

export const AnimeSearchContext = createContext({} as IAnimeApiSearch)
export const useAnimeSearch = (): IAnimeApiSearch => useContext(AnimeSearchContext)
