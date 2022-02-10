import { useDispatch } from 'react-redux'

import { GET_ANIME_ACTIONS } from '../../redux/actions/getAnime'

import { InterfaceGetAnimes } from '../../tools/interfaces'

import 'react-lazy-load-image-component/src/effects/blur.css'

import {
  CardStyle,
  CardImageStyle,
  CardBottomStyle,
  CardBottomTitleStyle,
  CardBottomDateStyle
} from './styles'

export const Card: React.FC<InterfaceGetAnimes> = ({ mal_id, image_url, title, start_date }) => {
  const DISPATCH = useDispatch()
  const GET_ANIME = (id: number) => DISPATCH(GET_ANIME_ACTIONS(id))

  const DATE = start_date && start_date.split(' ')[1]

  return (
    <CardStyle
      to={ `/anime/${mal_id}` }
      onClick={ () => GET_ANIME(mal_id) }
      title={ title }
    >
      <CardImageStyle
        src={ image_url }
        alt={ mal_id.toString() }
        loading="lazy"
        effect="blur"
      />
      <CardBottomStyle>
        <CardBottomTitleStyle>{ title }</CardBottomTitleStyle>
        { DATE && <CardBottomDateStyle>{ DATE }</CardBottomDateStyle> }
      </CardBottomStyle>
    </CardStyle>
  )
}
