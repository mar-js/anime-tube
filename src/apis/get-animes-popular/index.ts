import { IAnimePopular } from 'interfaces'

export const getAnimesPopular = async (): Promise<IAnimePopular[] | unknown> => {
  try {
    const RESPONSE = await fetch('https://gogoanime.consumet.stream/popular')
    const DATA: IAnimePopular[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIMES POPULAR: ', { e })

    return e
  }
}
