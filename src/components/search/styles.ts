import styled from 'styled-components'

import { MdSearch, MdClose } from 'react-icons/md'

export const SearchStyle = styled.div`
  grid-area: 1 / 2 / -1 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SearchImageStyle = styled(MdSearch)`
  cursor: pointer;
  font-size: 2.5rem;

  &.show {
    display: inline-block;
  }

  &.hide {
    display: none;
  }
`

export const SearchContainerStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &.show {
    display: inline-block;
  }

  &.hide {
    display: none;
  }

  &::after {
    content: '';
    position: fixed;
    top: 8%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: var(--color-black-opacity-secondary);
  }
`

export const FormStyle = styled.form`
  width: 100%;
  height: 100%;
`

export const SearchInputStyle = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  font-size: 1.8rem;

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`

export const CloseImageStyle = styled(MdClose)`
  width: 5rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  cursor: pointer;
  font-size: 2.5rem;
  background-color: var(--color-black);

  &.show {
    display: none;
  }

  &.hide {
    display: inline-block;
  }
`
