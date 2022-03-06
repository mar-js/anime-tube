import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { GET_ANIME_ACTIONS } from '../../redux/actions/getAnime'

import { InterfaceInitialState, InterfaceAnimesForDay } from '../../tools/interfaces'
import { ARR_SKELETON } from '../../tools/arrSkeleton'

import { v4 } from 'uuid'

import { SwiperSlide } from 'swiper/react'
import { Esqueleto } from '../../components/esqueleto'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {
  SwiperStyle,
  SwiperSliderLinkStyle,
  SwiperSliderImgStyle
} from './styles'
import './styles.css'

interface InterfaceUseSelector extends InterfaceInitialState {
  animesForDay: InterfaceAnimesForDay[];
}

export const SliderAnimesForDay: React.FC = () => {
  const DISPATCH = useDispatch()
  const GET_ANIME = (id: number) => DISPATCH(GET_ANIME_ACTIONS(id))

  const { fetching, animesForDay }: InterfaceUseSelector = useSelector((state: RootState) => state.stateAnimesForDay)

  return (
    <SwiperStyle
      preloadImages={ false }
      lazy={ true }
      loop={ true }
      breakpoints={ {
        320: {
          slidesPerView: 3.5,
          spaceBetween: 7
        },
        480: {
          slidesPerView: 5.5,
          spaceBetween: 6
        },
        640: {
          slidesPerView: 7.5,
          spaceBetween: 5
        },
        860: {
          slidesPerView: 9.5,
          spaceBetween: 4
        },
        1020: {
          slidesPerView: 11.5,
          spaceBetween: 3
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
          { animesForDay.map(({ mal_id, title, image_url }) => (
            <SwiperSlide className="swiperSliderStyle"
              key={ v4() + mal_id }
              title={ title }
            >
              <SwiperSliderLinkStyle
                to={ `/anime/${mal_id}` }
                onClick={ () => GET_ANIME(mal_id) }
              >
                <SwiperSliderImgStyle
                  src={ image_url }
                  alt={ title }
                />
              </SwiperSliderLinkStyle>
            </SwiperSlide>
          )) }
        </>
      ) }
    </SwiperStyle>
  )
}
