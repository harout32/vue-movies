export interface Genre {
  id: number;
  title: string;
}

export interface Actor {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  genre: Genre[];
  actors: Actor[];
  is_series: boolean;
  release_date: string;
}

export interface MoviesFilters {
  genre?: number[];
  showType?: number[];
}

export interface MoviesQuery {
  search?: string;
  filters?: MoviesFilters;
  pageIndex?: number;
  perPage?: number;
}

export interface MoviesResponse {
  hasNext: boolean;
  list: Movie[];
}
