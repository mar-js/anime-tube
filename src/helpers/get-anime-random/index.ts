import { generatorNumberRandom } from '../generator-number-random'

import { IAnimeApi, IAnimes } from 'interfaces'

export const getAnimeRandom = ({ animes }: IAnimes) => {
  const ANIMES = animes as IAnimeApi[]
  const LENGTH = ANIMES.length
  const NUMBER_RANDOM = generatorNumberRandom(LENGTH)

  return ANIMES[NUMBER_RANDOM]
}
