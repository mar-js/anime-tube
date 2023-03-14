import { useEffect, useState } from 'react'

import { getAnime } from 'apis'

import { onInfiniteScroll } from 'helpers'

import { IAnimeApi, IUseInfiniteScroll } from 'interfaces'

export const useInfiniteScroll = ({
  animes,
  slug,
  limit = 501,
  search
}: IUseInfiniteScroll) => {
  const [ items, setItems ] = useState<IAnimeApi[] | []>(animes)
  const [ hasMore, setHasMore ] = useState(true)
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    if (hasMore && page > 1) {
      (async () => {
        const DATA = await getAnime({
          slug,
          page,
          animeId: (typeof search === 'object' ? search.id : '') as string
        }) as IAnimeApi[]

        if (!DATA.length) setHasMore(false)

        setItems([ ...items, ...DATA ])
      })()
    }

    if (page === limit) setHasMore(false)
  }, [ page ])

  useEffect(() => {
    window.addEventListener('scroll', () => onInfiniteScroll({
      setLoading,
      page,
      setPage
    }))

    return () => window.removeEventListener('scroll', () => onInfiniteScroll({
      setLoading,
      page,
      setPage
    }))
  }, [ items ])

  return {
    items,
    hasMore,
    loading
  }
}
