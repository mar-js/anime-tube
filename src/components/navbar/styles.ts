import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ItemStyle = styled.li`
  margin-left: 1rem;
`

export const NavLinkStyle = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: var(--color-white);

  &:hover {
    color: var(--color-violet-grey)
  }

  &[aria-current] {
    color: var(--color-violet-grey);
  }
`
