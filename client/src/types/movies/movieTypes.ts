export interface MovieListProps {
  movies: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: string;
    genre_ids: number[];
  }[];
}

export interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: string;
    genre_ids: number[];
  };
}
