import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { GET_ANIME_ACTIONS } from '../../redux/actions/getAnime'

import { InterfaceInitialState, InterfaceAnimesForDay } from '../../tools/interfaces'
import { ARR_SKELETON } from '../../tools/arrSkeleton'

import { v4 } from 'uuid'

import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import { Esqueleto } from '../../components/esqueleto'

import {
  SwiperStyle,
  SwiperSliderLinkStyle,
  SwiperSliderImgStyle
} from './styles'

interface InterfaceUseSelector extends InterfaceInitialState {
  getAnimesForDay: InterfaceAnimesForDay[];
}

export const SliderAnimesForDay: React.FC = () => {
  const DISPATCH = useDispatch()
  const GET_ANIME = (id: number) => DISPATCH(GET_ANIME_ACTIONS(id))

  const { fetching, getAnimesForDay }: InterfaceUseSelector = useSelector((state: RootState) => state.stateAnimesForDay)

  return (
    <SwiperStyle
      preloadImages={ true }
      lazy={ true }
      loop={ true }
      breakpoints={ {
        320: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        480: {
          slidesPerView: 5,
          spaceBetween: 7
        },
        640: {
          slidesPerView: 7,
          spaceBetween: 6
        },
        860: {
          slidesPerView: 9,
          spaceBetween: 5
        },
        1020: {
          slidesPerView: 11,
          spaceBetween: 4
        }
      } }
    >
      { fetching || fetching === undefined ? (
        <>
          { ARR_SKELETON.map(v => (
            <SwiperSlide className="swiperSliderStyle" key={ v4() + v }>
              <Esqueleto
                width={ 90 }
                height={ 120 }
              />
            </SwiperSlide>
          )) }
        </>
      ) : (
        <>
          { getAnimesForDay.map(({ mal_id, title, image_url }) => (
            <SwiperSlide className="swiperSliderStyle"
              key={ v4() + mal_id }
              title={ title }
            >
              <Link href={ `/anime/${mal_id}` }>
                <SwiperSliderLinkStyle onClick={ () => GET_ANIME(mal_id) }>
                  <SwiperSliderImgStyle
                    src={ image_url }
                    alt={ title }
                  />
                </SwiperSliderLinkStyle>
              </Link>
            </SwiperSlide>
          )) }
        </>
      ) }
    </SwiperStyle>
  )
}
