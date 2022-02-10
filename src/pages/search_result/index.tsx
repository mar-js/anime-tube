import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RootState } from '../../redux/reducers'

import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { GET_SEARCH_ANIMES_ACTIONS } from '../../redux/actions/getSearchAnimes'

import { InterfaceGetAnimes, InterfaceInitialState } from '../../tools/interfaces'

import { SectionStyle } from '../../layouts/section/styles'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from 'react-loader-spinner'
import { Card } from '../../components/card'
import { Await } from '../../components/await'

import { FOR_AWAIT } from '../../tools/forAwait'

import { LoaderStyle } from '../../layouts/main/styles'

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

  const HANDLE_SCROLL = async () => {
    setTimeout(() => {
      setPageValue(pageValue + 1)
    }, 1000)
  }

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
      <TitleSearchStyle>
        Search: <AnimeSearchStyle>{ QUERY_VALUE }</AnimeSearchStyle>
      </TitleSearchStyle>
      { fetching || fetching === undefined ? (
        <LoaderStyle>
          <Loader
            type="Puff"
            color="#9775ff"
            secondaryColor="#a29bbb"
            height={ 50 }
            width={ 55 }
            timeout={ 3000 }
          />
        </LoaderStyle>
      ) : (
        <InfiniteScroll
          dataLength={ getSearchAnimes.length || 5 }
          hasMore={ true }
          next={ HANDLE_SCROLL }
          loader={ <LoaderStyle>
            <Loader
              type="Puff"
              color="#9775ff"
              secondaryColor="#a29bbb"
              height={ 50 }
              width={ 55 }
              timeout={ 3000 }
            />
          </LoaderStyle> }
          endMessage={ <span>You have seen it all</span> }
        >
          { getSearchAnimes.map(({ mal_id, image_url, title, start_date }) => (
            <Card
              key={ mal_id }
              mal_id={ mal_id }
              image_url={ image_url }
              title={ title }
              start_date={ start_date }
            />
          )) }
        </InfiniteScroll>
      ) }
      <Await
        fetching={ fetching }
        length={ FOR_AWAIT(getSearchAnimes) }
      />
    </SectionStyle>
  )
}
