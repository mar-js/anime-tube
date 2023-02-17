import { IAnimeDetails } from 'interfaces'

export const getAnimeDetails = async (animeId: string): Promise<IAnimeDetails | unknown> => {
  try {
    const RESPONSE = await fetch(`https://gogoanime.consumet.stream/anime-details/${animeId}`)
    const DATA: IAnimeDetails = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIME DETAILS: ', { e })

    return e
  }
}
