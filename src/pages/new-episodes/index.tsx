import { NextPage, GetServerSideProps } from 'next'

import { NavigationAnimesContext } from 'contexts'

import { getNewEpisodes } from 'apis'

import { LayoutNavigationAnimes } from 'components/templates'

import { IDataAnime } from 'interfaces'

const NewEpisodes: NextPage<IDataAnime> = (data) => (
  <NavigationAnimesContext.Provider value={ data }>
    <LayoutNavigationAnimes />
  </NavigationAnimesContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA_NEW_EPISODES = await getNewEpisodes() as unknown

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

export default NewEpisodes
