import { useEffect, useState } from 'react'

import { useAnimeHome } from 'contexts'

import { getAnimeRandom } from 'helpers'

import { IAnimeApi } from 'interfaces'

export const useGetAnimeRandom = () => {
  const [ animeRandom, setAnimeRandom ] = useState<IAnimeApi | null>(null)
  const { animePopular: { animes } } = useAnimeHome()

  useEffect(() => {
    if (typeof animes !== 'undefined' && animes.length > 0) {
      setAnimeRandom(getAnimeRandom({ animes }))
    }
  }, [ animes ])

  return { animeRandom }
}
