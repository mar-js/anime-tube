import styled from 'styled-components'

import { MdPlayArrow } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const ContainerLogoStyle = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
`

export const LogoImageStyle = styled(MdPlayArrow)`
  width: 3rem;
  height: 2rem;
  margin-right: .2rem;
  background-color: var(--color-violet);
  border-radius: .4rem;
`

export const LogoStyle = styled.h1`
  font-size: 1rem;
  letter-spacing: -.2rem;
`
