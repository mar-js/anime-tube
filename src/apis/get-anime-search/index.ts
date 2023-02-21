import { IAnimeSearch } from 'interfaces'

export const getAnimeSearch = async (search: string): Promise<IAnimeSearch[] | unknown> => {
  try {
    const RESPONSE = await fetch(`https://gogoanime.consumet.stream/search?keyw=${search}`)
    const DATA: IAnimeSearch[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error('ERROR GET ANIME SEARCH: ', { e })

    return e
  }
}
