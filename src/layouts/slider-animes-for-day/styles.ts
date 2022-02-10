import styled from 'styled-components'

import { Swiper } from 'swiper/react'
import { Link } from 'react-router-dom'

export const SwiperStyle = styled(Swiper)`
  grid-area: 2 / 1 / -1 / -1;
  width: 100%;
  height: 15rem;
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1.2rem;
  background-color: var(--color-black-opacity-secondary);
  overflow: hidden;
  box-shadow: 0 0 .1rem var(--color-white);
`

export const SwiperSliderLinkStyle = styled(Link)`
  width: 80%;
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
