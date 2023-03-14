import { NextPage, GetServerSideProps } from 'next'

import { AnimeHomeContext } from 'contexts'

import { getAnime } from 'apis'

import { LayoutHome } from 'components/templates'

import { IAnimeApiHome } from 'interfaces'

const Home: NextPage<IAnimeApiHome> = (data) => (
  <AnimeHomeContext.Provider value={ data }>
    <LayoutHome />
  </AnimeHomeContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA_ANIME_POPULAR = await getAnime({ slug: '/popular' })
    const DATA_ANIME_MOVIES = await getAnime({ slug: '/anime-movies' })
    const DATA_NEW_EPISODES = await getAnime({ slug: '/recent-release' })

    return {
      props: {
        newAnime: {
          title: {
            text: 'New Episodes',
            url: 'recent-release'
          },
          loading: 'ok',
          animes: DATA_NEW_EPISODES
        },
        moviesAnime: {
          title: {
            text: 'Anime Movies',
            url: 'anime-movies'
          },
          loading: 'ok',
          animes: DATA_ANIME_MOVIES
        },
        animePopular: {
          title: {
            text: 'Anime Popular',
            url: 'popular'
          },
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
