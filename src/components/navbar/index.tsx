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
        <NavLinkStyle to="/about-app" title="About App">About app</NavLinkStyle>
      </ItemStyle>
      <ItemStyle>
        <NavLinkStyle to="/contact" title="Contact">Contact</NavLinkStyle>
      </ItemStyle>
    </ListStyle>
  </NavBarStyle>
)
