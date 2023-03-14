import { NextPage, GetServerSideProps } from 'next'

import { AnimeDetailsContext } from 'contexts'

import { getAnimeDetails } from 'apis'

import { LayoutAnime } from 'components/templates'

import { IAnimeApiDetails, IAnimeDetails } from 'interfaces'

const Anime: NextPage<IAnimeApiDetails> = (data) => (
  <AnimeDetailsContext.Provider value={ data }>
    <LayoutAnime />
  </AnimeDetailsContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { id } = params as { id: string }
    const DATA_ANIME_DETAILS = await getAnimeDetails(id)

    return { props: { details: { ...DATA_ANIME_DETAILS as IAnimeDetails } } }
  } catch (e) {
    return { props: { e } }
  }
}

export default Anime
