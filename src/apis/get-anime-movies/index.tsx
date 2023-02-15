import { IAnimeApi } from 'interfaces'

export const getAnimeMovies = async (): Promise<IAnimeApi[] | unknown> => {
  try {
    const RESPONSE = await fetch('https://gogoanime.consumet.stream/anime-movies')
    const DATA: IAnimeApi[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIME MOVIES: ', { e })

    return e
  }
}
