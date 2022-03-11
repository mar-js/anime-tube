import Link from 'next/link'

import {
  ContainerLogoStyle,
  LogoImageStyle,
  LogoStyle
} from './styles'

export const Logo: React.FC = () => (
  <Link href="/" passHref>
    <ContainerLogoStyle title="AnimeTube">
      <LogoImageStyle />
      <LogoStyle>アニメチューブ</LogoStyle>
    </ContainerLogoStyle>
  </Link>
)
