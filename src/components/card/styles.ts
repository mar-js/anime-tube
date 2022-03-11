import styled from 'styled-components'

import Image from 'next/image'

export const CardStyle = styled.div`
  cursor: pointer;
  width: 100%;
  height: 32rem;
  position: relative;
  display: inline-block;
  color: inherit;
`

export const CardImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 2rem;
`

export const CardBottomStyle = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 5rem;
  align-items: center;
  gap: 0 4rem;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  text-align: initial;
  background: linear-gradient(0deg, var(--color-black) 0%, var(--color-black-opacity-primary) 100%);
`

export const CardBottomTitleStyle = styled.h3`
  grid-area: 1 / 1 / 2 / 2;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardBottomDateStyle = styled.span`
  grid-area: 1 / 2 / 2 / 3;
  line-height: 3rem;
  text-align: center;
  background-color: var(--color-violet);
  border-radius: .2rem;
`
