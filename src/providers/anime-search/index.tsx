import { PropsWithChildren, useState } from 'react'

import { AnimeSearchContext } from 'contexts'

import { IDataAnime } from 'interfaces'

export const AnimeSearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ result, setResult ] = useState<IDataAnime | null>(null)

  const VALUE = {
    result,
    setResult
  }

  return (
    <AnimeSearchContext.Provider value={ VALUE }>
      { children }
    </AnimeSearchContext.Provider>
  )
}
