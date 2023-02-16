import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardAnime } from '../card-anime'

import { IAnimeApi } from 'interfaces'

import 'swiper/css'
import 'swiper/css/navigation'

export const Slider: React.FC<IAnimeApi> = ({ animes }) => (
  <Swiper
    autoplay={ {
      delay: 1500,
      disableOnInteraction: false
    } }
    navigation
    loop
    breakpoints={ {
      300: { slidesPerView: 1 },
      350: { slidesPerView: 1.5 },
      500: { slidesPerView: 2 },
      650: { slidesPerView: 2.5 },
      800: { slidesPerView: 3 },
      900: { slidesPerView: 3.5 },
      1100: { slidesPerView: 4 },
      1300: { slidesPerView: 4.5 },
      1500: { slidesPerView: 5 }
    } }
    modules={ [ Autoplay, Navigation ] }
    style={ {
      backgroundColor: '#71809622',
      padding: '10px'
    } }
  >
    { animes?.map((anime) => (
      <SwiperSlide
        key={ anime.animeId }
        style={ {
          display: 'flex',
          alignItems: 'center'
        } }
      >
        <CardAnime { ...anime } />
      </SwiperSlide>
    )) }
  </Swiper>
)
