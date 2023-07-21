export interface MovieProps {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MovieListProps {
  isCollection: boolean;
  movies: MovieProps[];
}

export interface MovieCardProps {
  isCollection: boolean;
  movie: MovieProps;
}

export interface MovieModalProps {
  movie: {
    title: string;
    poster_path: string;
    tagline: string;
    release_date: string;
    vote_average: number;
    runtime: number | string;
    genres: [{ id: number; name: string }];
  };
}

export interface MovieCreditsMember {
  [key: string]: any;
}

export interface MovieCreditsProps {
  credits: {
    crew?: MovieCreditsMember;
    cast?: MovieCreditsMember;
  };
}

export interface MovieDetailProps {
  movie: {
    genres: string[];
    tagline: string;
    poster_path: string;
    release_date: string;
    runtime: number | string;
    title: string;
    vote_average: number | string;
    actor: string[];
    director: string[];
  };
}

export interface AddMovieModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface isCollectionProps {
  isCollection: boolean;
  query?: string;
}

export interface ListTableHeadLabelProps {
  id: string;
  label: string;
  alignRight: boolean;
}

export interface ListTableHeadProps {
  headLabel: ListTableHeadLabelProps[];
  rowCount: number;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
