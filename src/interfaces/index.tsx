export type TLoading = 'loading' | 'ok' | 'fail'

export interface IContainerSlider extends IAnimeApi {
  title: string;

}

export interface ILink {
  path: string;
  text: string;
}

export interface IAnimeApiHome {
  newAnime: IDataAnime;
  moviesAnime: IDataAnime;
  animePopular: IDataAnime;
}

export interface IDataAnime extends IAnimeApi {
  loading: TLoading;
  error?: string | unknown;
  title: string;
}

export interface IAnimeApiAPi {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
}

export interface IAnimeApi {
  animes?: IAnimeApiAPi[]
}
