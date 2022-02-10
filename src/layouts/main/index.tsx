import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { GET_ANIMES_ACTIONS } from '../../redux/actions/getAnimes'

import { InterfaceGetAnimes, InterfaceInitialState } from '../../tools/interfaces'

import { Skelet } from '../../components/skelet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LoaderLo } from '../../components/loader-lo'
import { Card } from '../../components/card'

import { MainStyle } from './styles'

interface InterfaceGetAnimesUseSelector extends InterfaceInitialState {
  getAnimes: InterfaceGetAnimes[];
}

export const Main: React.FC = () => {
  const [ pageValue, setPageValue ] = useState<number>(1)

  const DISPATCH = useDispatch()
  const GET_ANIMES = (page: number) => DISPATCH(GET_ANIMES_ACTIONS(page))

  const { fetching, getAnimes }: InterfaceGetAnimesUseSelector = useSelector((state: RootState) => state.stateGetAnimes)
  const GET_ANIMES_ = getAnimes || []

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
      { fetching && !GET_ANIMES_.length ? (
        <Skelet
          repeat={ 2 }
          width={ 215 }
          height={ 320 }
          borderRadius={ 20 }
        />
      ) : (
        <InfiniteScroll
          dataLength={ GET_ANIMES_.length || 3 }
          hasMore={ true }
          next={ HANDLE_SCROLL }
          loader={ <LoaderLo /> }
          endMessage={ <span>You have seen it all</span> }
        >
          { GET_ANIMES_.map(({ mal_id, image_url, title, start_date }) => (
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
    </MainStyle>
  )
}
