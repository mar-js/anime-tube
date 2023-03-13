import { NextPage, GetServerSideProps } from 'next'

import { NavigationAnimesContext } from 'contexts'

import { getAnime } from 'apis'

import { LayoutNavigationAnimes } from 'components/templates'

import { IDataAnime } from 'interfaces'

const RecentRelease: NextPage<IDataAnime> = (data) => (
  <NavigationAnimesContext.Provider value={ data }>
    <LayoutNavigationAnimes />
  </NavigationAnimesContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA_NEW_EPISODES = await getAnime({ slug: '/recent-release' }) as unknown

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

export default RecentRelease
