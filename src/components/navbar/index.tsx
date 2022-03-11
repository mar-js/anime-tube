import Link from 'next/link'

import {
  NavBarStyle,
  ListStyle,
  ItemStyle,
  NavLinkStyle
} from './styles'

export const NavBar: React.FC = () => (
  <NavBarStyle>
    <ListStyle>
      <ItemStyle>
        <Link href="/about-app">
          <NavLinkStyle title="About App">About app</NavLinkStyle>
        </Link>
      </ItemStyle>
      <ItemStyle>
        <Link href="/contact">
          <NavLinkStyle title="Contact">Contact</NavLinkStyle>
        </Link>
      </ItemStyle>
    </ListStyle>
  </NavBarStyle>
)
