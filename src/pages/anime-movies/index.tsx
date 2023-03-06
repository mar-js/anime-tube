import { NextPage, GetServerSideProps } from 'next'

import { NavigationAnimesContext } from 'contexts'

import { getAnimeMovies } from 'apis'

import { LayoutNavigationAnimes } from 'components/templates'

import { IDataAnime } from 'interfaces'

const AnimeMovies: NextPage<IDataAnime> = (data) => (
  <NavigationAnimesContext.Provider value={ data }>
    <LayoutNavigationAnimes />
  </NavigationAnimesContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA_ANIME_MOVIES = await getAnimeMovies() as unknown

    return {
      props: {
        loading: 'ok',
        animes: DATA_ANIME_MOVIES
      }
    }
  } catch (e) {
    return {
      props: {
        loading: 'fail',
        error: e
      }
    }
  }
}

export default AnimeMovies
