import { NextPage, GetServerSideProps } from 'next'

import { NavigationAnimesContext } from 'contexts'

import { getAnimeSearch } from 'apis'

import { LayoutNavigationAnimes } from 'components/templates'

import { IDataAnime } from 'interfaces'

const Result: NextPage<IDataAnime> = (data) => (
  <NavigationAnimesContext.Provider value={ data }>
    <LayoutNavigationAnimes />
  </NavigationAnimesContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    const DATA_NEW_EPISODES = await getAnimeSearch(id) as unknown

    return {
      props: {
        loading: 'ok',
        animes: DATA_NEW_EPISODES
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

export default Result
