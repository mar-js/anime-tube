import { HTMLChakraProps } from '@chakra-ui/react'
import {
  Dispatch,
  ReactNode,
  SetStateAction
} from 'react'

export type TLoading = 'loading' | 'ok' | 'fail'
export type TGenres = 'action' | 'adventure' | 'cars' | 'comedy' | 'crime' | 'dementia' | 'demons' | 'drama' | 'dub' | 'ecchi' | 'family' | 'fantasy' | 'game' | 'gourmet' | 'harem' | 'historical' | 'horror' | 'josei' | 'kids' | 'magic' | 'martial-arts' | 'mecha' | 'military' | 'Mmusic' | 'mystery' | 'parody' | 'police' | 'psychological' | 'romance' | 'samurai' | 'school' | 'sci-fi' | 'seinen' | 'shoujo' | 'shoujo-ai' | 'shounen' | 'shounen-ai' | 'slice-of-Life' | 'space' | 'sports' | 'super-power' | 'supernatural' | 'suspense' | 'thriller' | 'vampire' | 'yaoi' | 'yuri'

export interface IError {
  title: string;
  error: string | unknown;
}

export interface IAnimeApiSearch {
  result: IDataAnime | null;
  setResult: Dispatch<SetStateAction<IDataAnime | null>>
}

export interface ISearch {
  search: string;
}

export interface ICardAnime {
  animeTitle: string;
  animeImg: string;
  isDetails?: boolean;
}

export interface IAnimeApiDetails {
  details: IAnimeDetails;
}

export interface ILink extends HTMLChakraProps<'a'> {
  path: string;
  children: ReactNode
}

export interface IAnimeApiHome {
  newAnime: IDataAnime;
  moviesAnime: IDataAnime;
  animePopular: IDataAnime;
}

export interface IDataAnime extends IAnimes {
  loading: TLoading;
  error?: string | unknown;
  title: string;
}

export interface IAnimeApi {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate?: string;
  animeUrl: string;
  status?: string;
}

export interface IAnimes {
  animes?: IAnimeApi[];
}

export interface IAnimeDetails {
  animeTitle: string;
  type: string;
  releasedDate: string;
  status: string;
  genres: string[];
  otherNames: string;
  synopsis: string;
  animeImg: string;
  totalEpisodes: string;
  episodesList: IEpisodesList[];
}

interface IEpisodesList {
  episodeId: string;
  episodeNum: string;
  episodeUrl: string;
}
