// ----------------------------------------------------------------------
// collection 타입
// ----------------------------------------------------------------------

export interface CollectionAddMovieListProps {
  isCollection: boolean;
  query: string;
}

export interface CollectionListObj {
  id: string;
  collectionTitle: string;
  rgstDate: Date;
  user: {
    userId: string;
    userName: string;
  };
}

export interface CollectionData {
  isSuccess: boolean;
  documentCount: number;
  totalPages: number;
  payload: CollectionListObj[];
}

export interface CollectionDetailData {
  authUserId: string;
  collectionTitle: string;
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