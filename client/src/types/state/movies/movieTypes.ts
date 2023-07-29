import { IconifyIcon } from "@iconify/react";
import { SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------
// movie 타입
// ----------------------------------------------------------------------

export interface MovieProps {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre_ids?: number[];
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
  isColList?: boolean;
  sx?: SxProps<Theme>;
}

export interface CollectionObj {
  collectionTitle: string;
  movie: {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
  }[];
}

export interface ListCollectionObj {
  id: string;
  collectionTitle: string;
  rgstDate: Date;
  user: {
    userId: string;
    userName: string;
  };
}

export interface ListBoardData {
  isSuccess: boolean;
  documentCount: number;
  totalPages: number;
  payload: ListCollectionObj[];
}

export interface payload {
  payload: {
    isSuccess: boolean;
    msg: string;
  };
}

export interface NodataProps {
  msg?: string;
  icon: string | IconifyIcon;
  width?: number;
  sx?: SxProps;
  containerSx?: SxProps;
}

export interface MovieTypeProps {
  onChange: () => void;
}

export interface MovieModalPageProps {
  id: number | null;
}