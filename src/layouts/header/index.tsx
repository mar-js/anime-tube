import { Logo } from '../../components/logo'
import { Search } from '../../components/search'
import { NavBar } from '../../components/navbar'

import { HeaderStyle } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Search />
      <NavBar />
    </HeaderStyle>
  )
}
