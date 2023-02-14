export type TLoading = 'loading' | 'ok' | 'fail'

export interface ILink {
  path: string;
  text: string;
}

export interface IDataAnime {
  loading: TLoading;
  animes?: IAnime[];
  error?: string | unknown;
}

export interface IAnime {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
}
