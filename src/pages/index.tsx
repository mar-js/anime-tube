import { NextPage, GetServerSideProps } from 'next'

import { AnimeHomeContext } from 'contexts'

import {
  getAnimePopular,
  getAnimeMovies,
  getNewEpisodes
} from 'apis'

import { LayoutHome } from 'components/templates'

import { IAnimeApiHome } from 'interfaces'

const Home: NextPage<IAnimeApiHome> = (data) => (
  <AnimeHomeContext.Provider value={ data }>
    <LayoutHome />
  </AnimeHomeContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA_ANIME_POPULAR = await getAnimePopular() as unknown
    const DATA_ANIME_MOVIES = await getAnimeMovies() as unknown
    const DATA_NEW_EPISODES = await getNewEpisodes() as unknown

    return {
      props: {
        newAnime: {
          title: 'New Episodes',
          loading: 'ok',
          animes: DATA_NEW_EPISODES
        },
        moviesAnime: {
          title: 'Anime Movies',
          loading: 'ok',
          animes: DATA_ANIME_MOVIES
        },
        animePopular: {
          title: 'Anime Popular',
          loading: 'ok',
          animes: DATA_ANIME_POPULAR
        }
      }
    }
  } catch (e) {
    return {
      props: {
        newAnime: {
          loading: 'fail',
          error: e
        },
        moviesAnime: {
          loading: 'fail',
          error: e
        },
        animePopular: {
          loading: 'fail',
          error: e
        }
      }
    }
  }
}

export default Home
