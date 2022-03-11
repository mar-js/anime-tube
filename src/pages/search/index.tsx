import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { RootState } from '../../redux/reducers'
import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { GET_SEARCH_ANIMES_ACTIONS } from '../../redux/actions/getSearchAnimes'

import { InterfaceGetAnimes, InterfaceInitialState } from '../../tools/interfaces'
import { FOR_AWAIT } from '../../tools/forAwait'
import { ARR_SKELETON } from '../../tools/arrSkeleton'

import { v4 } from 'uuid'

import Head from 'next/head'
import { Section } from '../../layouts/section'
import { Esqueleto } from '../../components/esqueleto'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LoaderLo } from '../../components/loader-lo'
import { GridItem } from '../../components/grid-item'
import { Card } from '../../components/card'
import { Await } from '../../components/await'

import { AnimeSearchStyle, TitleSearchStyle } from './styles'

interface InterfaceGetSearchAnimesUseSelector extends InterfaceInitialState {
  getSearchAnimes: InterfaceGetAnimes[];
}

const SearchResult: NextPage = () => {
  const [ pageValue, setPageValue ] = useState<number>(1)
  const { query } = useRouter()
  const QUERY: string = (query.q as string)

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
    GET_SEARCH_ANIMES(pageValue, QUERY)

    return () => null
  }, [ pageValue ])

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIMES_FOR_DAY })
    DISPATCH({ type: RESET_ANIMES })
    DISPATCH({ type: RESET_ANIME })

    return () => null
  }, [])

  return (
    <>
      <Head>
        <title>Search Result | AnimeTube</title>
      </Head>
      <Section>
        <TitleSearchStyle>Search: <AnimeSearchStyle>{ QUERY }</AnimeSearchStyle></TitleSearchStyle>
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
      </Section>
    </>
  )
}

export default SearchResult
