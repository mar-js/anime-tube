import { useEffect, useState } from 'react'

import { InterfaceGetAnime } from '../../tools/interfaces'

import {
  BoxInfoStyle,
  DetailsAnimeStyle,
  BoxInfoTitleStyle,
  BoxInfoTitleTextH2Style,
  BoxInfoTitleTextH3Style,
  BoxInfoParagraphStyle,
  BoxInfoParagraphEpisodesStyle,
  BoxInfoParagraphSynopsisStyle,
  BoxInfoAnclaStyle
} from './styles'

export const DetailsAnime: React.FC<InterfaceGetAnime> = ({ mal_id, image_url, trailer_url, title, title_japanese, episodes, synopsis }) => {
  const [ viewAnime, setViewAnime ] = useState<string>('')

  const URL_ANIME_FLV = 'https://www3.animeflv.net/anime/'
  const TITLE = title.toLocaleLowerCase().split(' ').join('-')
  const VIEW_ANIME = URL_ANIME_FLV.concat(TITLE)

  useEffect(() => {
    setViewAnime(VIEW_ANIME)

    return () => setViewAnime('')
  }, [ viewAnime, setViewAnime ])

  return (
    <DetailsAnimeStyle>
      { trailer_url ? (
        <iframe
          src={ trailer_url }
          style={ {
            width: 100 + '%',
            height: 30 + 'rem'
          } }
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={ image_url }
          alt={ mal_id.toString() }
          style={ {
            width: 100 + '%',
            height: 25 + 'rem',
            objectFit: 'none'
          } }
        />
      ) }
      <BoxInfoStyle>
        <BoxInfoTitleStyle>
          <BoxInfoTitleTextH2Style>{ title }</BoxInfoTitleTextH2Style>
          <BoxInfoTitleTextH3Style>{ title_japanese }</BoxInfoTitleTextH3Style>
        </BoxInfoTitleStyle>
        <BoxInfoParagraphStyle>
          { episodes && <BoxInfoParagraphEpisodesStyle>Episodes: { episodes }</BoxInfoParagraphEpisodesStyle> }
          <BoxInfoParagraphSynopsisStyle>{ synopsis }</BoxInfoParagraphSynopsisStyle>
        </BoxInfoParagraphStyle>
        <BoxInfoAnclaStyle
          href={ viewAnime }
          target="_blank"
          rel="noreferrer"
        >View anime in AnimeFLV</BoxInfoAnclaStyle>
      </BoxInfoStyle>
    </DetailsAnimeStyle>
  )
}
