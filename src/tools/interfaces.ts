export interface InterfaceInitialState {
  fetching: boolean;
  error?: string;
}

export interface InterfaceAnimesForDay {
  mal_id: number;
  title: string;
  image_url: string;
}

export interface InterfaceGetAnimes {
  mal_id: number;
  image_url: string;
  title: string;
  start_date: string;
}

export interface InterfaceGetAnime {
  mal_id: number;
  image_url: string;
  trailer_url: string | any;
  title: string;
  title_japanese: string;
  episodes: number;
  synopsis: string;
}

export interface InterfaceCardStyle {
  right?: boolean;
  left?: boolean;
}

export interface InterfaceAwait {
  fetching: boolean;
  length: number;
}

export interface InterfaceEsqueleto {
  width?: number;
  height?: number;
  inline?: boolean;
  borderRadius?: number;
}
