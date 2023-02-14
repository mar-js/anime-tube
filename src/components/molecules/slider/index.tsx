import { useAnimesPopular } from 'contexts'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardAnime } from '../card-anime'

import 'swiper/css'
import 'swiper/css/pagination'

export const Slider: React.FC = () => {
  const { animes } = useAnimesPopular()

  return (
    <Swiper
      loop
      spaceBetween={ 10 }
      breakpoints={ {
        320: { slidesPerView: 1 },
        400: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1000: { slidesPerView: 5 }
      } }
      modules={ [ Pagination ] }
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
}
