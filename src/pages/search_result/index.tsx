import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RootState } from '../../redux/reducers'
import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { GET_SEARCH_ANIMES_ACTIONS } from '../../redux/actions/getSearchAnimes'

import { InterfaceGetAnimes, InterfaceInitialState } from '../../tools/interfaces'
import { FOR_AWAIT } from '../../tools/forAwait'
import { ARR_SKELETON } from '../../tools/arrSkeleton'

import { v4 } from 'uuid'

import { Esqueleto } from '../../components/esqueleto'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LoaderLo } from '../../components/loader-lo'
import { GridItem } from '../../components/grid-item'
import { Card } from '../../components/card'
import { Await } from '../../components/await'

import { SectionStyle } from '../../layouts/section/styles'
import { AnimeSearchStyle, TitleSearchStyle } from './styles'

interface InterfaceGetSearchAnimesUseSelector extends InterfaceInitialState {
  getSearchAnimes: InterfaceGetAnimes[];
}

export const SearchResult: React.FC = () => {
  const [ pageValue, setPageValue ] = useState<number>(1)
  const { search } = useLocation()
  const QUERY = new URLSearchParams(search)
  const QUERY_VALUE = QUERY.get('query') as string

  const DISPATCH = useDispatch()
  const GET_SEARCH_ANIMES = (page: number, query: string) => DISPATCH(GET_SEARCH_ANIMES_ACTIONS(page, query))

  const { fetching, getSearchAnimes }: InterfaceGetSearchAnimesUseSelector = useSelector((state: RootState) => state.stateGetSearchAnimes)
  const GET_SEARCH_ANIMES_ = getSearchAnimes || []

  const HANDLE_SCROLL = () => {
    setTimeout(() => {
      setPageValue(pageValue + 1)
    }, 1000)
  }

  useEffect((): any => {
    document.title = 'Search Result | AnimeTube'

    return () => null
  })

  useEffect((): any => {
    GET_SEARCH_ANIMES(pageValue, QUERY_VALUE)

    return () => null
  }, [ pageValue ])

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIMES_FOR_DAY })
    DISPATCH({ type: RESET_ANIMES })
    DISPATCH({ type: RESET_ANIME })

    return () => null
  }, [])

  return (
    <SectionStyle>
      <TitleSearchStyle>Search: <AnimeSearchStyle>{ QUERY_VALUE }</AnimeSearchStyle></TitleSearchStyle>
      { fetching && GET_SEARCH_ANIMES_.length === 0 ? (
        <GridItem>
          { ARR_SKELETON.map(v => (
            <Esqueleto
              key={ v4() + v }
              height={ 320 }
              borderRadius={ 20 }
            />
          )) }
        </GridItem>
      ) : (
        <InfiniteScroll
          dataLength={ GET_SEARCH_ANIMES_.length }
          hasMore={ true }
          next={ HANDLE_SCROLL }
          loader={ <LoaderLo /> }
          endMessage={ <span>You have seen it all</span> }
        >
          <GridItem>
            { GET_SEARCH_ANIMES_.map(({
              mal_id,
              image_url,
              title,
              start_date
            }) => (
              <Card
                key={ v4() + mal_id }
                mal_id={ mal_id }
                image_url={ image_url }
                title={ title }
                start_date={ start_date }
              />
            )) }
          </GridItem>
        </InfiniteScroll>
      ) }
      { fetching && GET_SEARCH_ANIMES_.length > 0 && (
        <Await
          fetching={ fetching }
          length={ FOR_AWAIT(GET_SEARCH_ANIMES_) }
        />
      ) }
    </SectionStyle>
  )
}
