import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { GET_ANIMES_ACTIONS } from '../../redux/actions/getAnimes'

import { InterfaceGetAnimes, InterfaceInitialState } from '../../tools/interfaces'
import { FOR_AWAIT } from '../../tools/forAwait'

import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from 'react-loader-spinner'
import { Card } from '../../components/card'
import { Await } from '../../components/await'

import { MainStyle, LoaderStyle } from './styles'

interface InterfaceGetAnimesUseSelector extends InterfaceInitialState {
  getAnimes: InterfaceGetAnimes[];
}

export const Main: React.FC = () => {
  const [ pageValue, setPageValue ] = useState<number>(1)

  const DISPATCH = useDispatch()
  const GET_ANIMES = (page: number) => DISPATCH(GET_ANIMES_ACTIONS(page))

  const { fetching, getAnimes }: InterfaceGetAnimesUseSelector = useSelector((state: RootState) => state.stateGetAnimes)

  const HANDLE_SCROLL = async () => {
    setTimeout(() => {
      setPageValue(pageValue + 1)
    }, 1000)
  }

  useEffect((): any => {
    GET_ANIMES(pageValue)

    return () => null
  }, [ pageValue ])

  return (
    <MainStyle>
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
          dataLength={ getAnimes.length || 3 }
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
          { getAnimes.map(({ mal_id, image_url, title, start_date }) => (
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
        length={ FOR_AWAIT(getAnimes) }
      />
    </MainStyle>
  )
}
