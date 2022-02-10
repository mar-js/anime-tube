import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { GET_ANIME_ACTIONS } from '../../redux/actions/getAnime'

import { InterfaceInitialState, InterfaceAnimesForDay } from '../../tools/interfaces'

import { SwiperSlide } from 'swiper/react'
import Loader from 'react-loader-spinner'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { LoaderStyle } from '../main/styles'
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
      spaceBetween={ 7 }
      slidesPerView={ 3.5 }
      lazy={ true }
      loop={ true }
    >
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
        <>
          { animesForDay.map(({ mal_id, title, image_url }) => (
            <SwiperSlide className="swiperSliderStyle"
              key={ mal_id }
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
