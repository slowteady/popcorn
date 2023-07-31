import { IconifyIcon } from "@iconify/react";
import { SxProps } from "@mui/material";

// ----------------------------------------------------------------------
// movies 타입
// ----------------------------------------------------------------------

export interface MoviesObj {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface MoviesSortBoxProps {
  onChange: () => void;
}

export interface MovieAlbumListProps {
  isCollection: boolean;
  movies: MoviesObj[];
}

export interface MovieCardProps {
  isCollection: boolean;
  movies: MoviesObj;
}

export interface MovieModalLayoutProps {
  open: boolean;
  handleClose: () => void;
  id: number | null;
}

export interface MovieResponseData {
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

export interface MovieModalPageProps {
  id: number | null;
}

export interface MovieDetailObj {
  genres: string[];
  tagline: string;
  poster_path: string;
  release_date: string;
  runtime: number | string;
  title: string;
  vote_average: number | string;
  actor: string[];
  director: string[];
}

export interface MovieCreditsMember {
  [key: string]: any;
}

export interface MovieCreditsObj {
  credits: {
    crew?: MovieCreditsMember;
    cast?: MovieCreditsMember;
  };
}

// -------------------------------

export interface isCollectionProps {
  isCollection: boolean;
  query?: string;
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
