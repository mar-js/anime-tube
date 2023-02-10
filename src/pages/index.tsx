import { NextPage, GetServerSideProps } from 'next'

import { AnimesPopularContext } from 'contexts'

import { getAnimesPopular } from 'apis'

import { LayoutHome } from 'components/templates'

import { IAnimePopular, IAnimesPopularModel } from 'interfaces'

const Home: NextPage<IAnimesPopularModel> = (data) => (
  <AnimesPopularContext.Provider value={ data }>
    <LayoutHome />
  </AnimesPopularContext.Provider>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const DATA = await getAnimesPopular() as unknown

    return {
      props: {
        loading: 'ok',
        animes: [ ...DATA as IAnimePopular[] ]
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

export default Home
