import styled from 'styled-components'

import { Swiper } from 'swiper/react'

export const SwiperStyle = styled(Swiper)`
  grid-area: 2 / 1 / -1 / -1;
  width: 100%;
  height: 15rem;
  padding: 1rem 0;
  margin-top: 5rem;
  background-color: var(--color-black);
  overflow: hidden;
`

export const SwiperSliderLinkStyle = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: inline-block;
  margin-left: 1rem;
  line-height: 3rem;
  color: var(--color-black);
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const SwiperSliderImgStyle = styled.img`
  width: 100%;
  height: 100%;
`
