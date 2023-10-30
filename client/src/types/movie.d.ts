export interface Movie {
  poster_path: string;
}

export type Option = 'NOWPLAYING' | 'POPULAR' | 'TOPRATED';

export interface FilterOption {
  value: Option;
  label: string;
}

export interface MoviesData {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MoviesDetailProps {
  movie: {
    id: number;
    posterPath: string;
  };
}
