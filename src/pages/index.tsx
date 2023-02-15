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
          animes: DATA_NEW_EPISODES
        },
        moviesAnime: {
          title: 'Anime Movies',
          animes: DATA_ANIME_MOVIES
        },
        animePopular: {
          title: 'Anime Popular',
          animes: DATA_ANIME_POPULAR
        }
      }
    }
  } catch (e) {
    return {
      props: {
        newAnime: { error: e },
        moviesAnime: { error: e },
        animePopular: { error: e }
      }
    }
  }
}

export default Home
