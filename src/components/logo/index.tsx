import {
  ContainerLogoStyle,
  LogoImageStyle,
  LogoStyle
} from './styles'

export const Logo: React.FC = () => (
  <ContainerLogoStyle to="/" title="AnimeTube" >
    <LogoImageStyle />
    <LogoStyle>アニメチューブ</LogoStyle>
  </ContainerLogoStyle>
)
