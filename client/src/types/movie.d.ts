export interface Movie {
  poster_path: string;
}

type Option = 'NOWPLAYING' | 'POPULAR' | 'TOPRATED';

export interface FilterOption {
  value: Option;
  label: string;
}
