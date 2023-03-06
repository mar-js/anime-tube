import { IAnimeApi } from 'interfaces'

export const getNewEpisodes = async (page = 1): Promise<IAnimeApi[] | unknown> => {
  try {
    const RESPONSE = await fetch(`https://gogoanime.consumet.stream/recent-release?page=${page}`)
    const DATA: IAnimeApi[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET NEW EPISODES: ', { e })

    return e
  }
}
