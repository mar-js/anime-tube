import { useDispatch } from 'react-redux'

import { GET_ANIME_ACTIONS } from '../../redux/actions/getAnime'

import { InterfaceGetAnimes } from '../../tools/interfaces'

import Link from 'next/link'
import {
  CardStyle,
  CardImageStyle,
  CardBottomStyle,
  CardBottomTitleStyle,
  CardBottomDateStyle
} from './styles'

export const Card: React.FC<InterfaceGetAnimes> = ({
  mal_id,
  image_url,
  title,
  start_date
}) => {
  const DISPATCH = useDispatch()
  const GET_ANIME = (id: number) => DISPATCH(GET_ANIME_ACTIONS(id))

  const DATE = start_date && start_date.split(' ')[1]

  return (
    <Link href={ `/anime/${mal_id}` } passHref>
      <CardStyle
        onClick={ () => GET_ANIME(mal_id) }
        title={ title }
      >
        <CardImageStyle
          src={ image_url }
          alt={ mal_id.toString() }
          layout="fill"
          priority={ true }
        />
        <CardBottomStyle>
          <CardBottomTitleStyle>{ title }</CardBottomTitleStyle>
          { DATE && <CardBottomDateStyle>{ DATE }</CardBottomDateStyle> }
        </CardBottomStyle>
      </CardStyle>
    </Link>
  )
}
