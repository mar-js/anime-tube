import { IAnimeApi } from 'interfaces'

export const getAnimePopular = async (): Promise<IAnimeApi[] | unknown> => {
  try {
    const RESPONSE = await fetch('https://gogoanime.consumet.stream/popular')
    const DATA: IAnimeApi[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIME POPULAR: ', { e })

    return e
  }
}
