import { IAnimeApi } from 'interfaces'

export const getAnimeSearch = async (search: string, page = 1): Promise<IAnimeApi[] | unknown> => {
  try {
    const RESPONSE = await fetch(`https://gogoanime.consumet.stream/search?page=${page}&keyw=${search}`)
    const DATA: IAnimeApi[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIME SEARCH: ', { e })

    return e
  }
}
