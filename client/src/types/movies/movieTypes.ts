export interface MovieListProps {
  movies: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    genre_ids: number[];
  }[];
}

export interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    genre_ids: number[];
  };
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

export interface MovieCreditsProps {
  credits: {
    crew?: {
      [key: string]: any;
    };
    cast?: {
      [key: string]: any;
    };
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
