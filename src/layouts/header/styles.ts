import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: repeat(1, 1fr);
  padding: 1rem 0;
  background-color: var(--color-black);
`
