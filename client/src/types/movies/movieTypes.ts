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

export interface ModalMovieProps {
  movie: {
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    runtime: number;
    genres: [{ id: number; name: string }];
  };
}
