export type TLoading = 'loading' | 'ok' | 'fail'

export interface ICardAnime {
  animeTitle: string;
  animeImg: string;
  isHover?: boolean;
}

export interface IAnimeApiDetails {
  details: IAnimeDetails;
}

export interface IContainerSlider extends IAnimes {
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

export interface IDataAnime extends IAnimes {
  loading: TLoading;
  error?: string | unknown;
  title: string;
}

export interface IAnimeApi {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
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
  episodesList: EpisodesList[];
}

interface EpisodesList {
  episodeId: string;
  episodeNum: string;
  episodeUrl: string;
}
