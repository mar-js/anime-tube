import { useEffect } from 'react'

import { useAnimeSearch } from 'contexts'

export const useResultSearchAnime = () => {
  const { result, setResult } = useAnimeSearch()

  useEffect(() => {
    if ((result?.animes?.length as number) < 1) {
      setResult({
        title: 'Result',
        loading: 'fail',
        error: 'Not result'
      })
    }

  }, [ result?.animes ])

  return { result }
}
