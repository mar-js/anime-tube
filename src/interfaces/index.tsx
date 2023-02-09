export type TLoading = 'loading' | 'ok' | 'fail'

export interface IAnimesPopularModel {
  loading: TLoading;
  animes?: IAnimePopular[];
  error?: string | unknown;
}

export interface IAnimePopular {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
}
