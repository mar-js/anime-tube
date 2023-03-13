import { IAnimeApi, IGetAnimeAPI } from 'interfaces'

export const getAnime = async ({
  slug,
  animeId,
  page = 1
}: IGetAnimeAPI): Promise<IAnimeApi[] | unknown> => {
  try {
    const ANIME_ID = animeId ? `/${animeId}?` : '?'
    const RESPONSE = await fetch(`https://gogoanime.consumet.stream${slug}${ANIME_ID}page=${page}`)
    const DATA: IAnimeApi[] = await RESPONSE.json()

    return DATA
  } catch (e) {
    console.error(`ERROR IN GET ${slug}`, { e })

    return e
  }
}
