import { collectionBasedRequest } from '../api/apiInstance';
import { MoviesData } from '../types/movie';

interface RegisterCollecionBody {
  collectionTitle: string;
  movie: MoviesData[];
}

export const getCollection = (page: number, limit: number) => {
  return collectionBasedRequest.get(`/${page}`, { params: { limit } });
};

export const getCollectionDetail = (id: string, page: number, limit: number) => {
  return collectionBasedRequest.get(`/detail/${id}`, { params: { page, limit } });
};

export const deleteCollection = (id: string) => {
  return collectionBasedRequest.delete('', { params: { id } });
};

export const registerCollection = (body: RegisterCollecionBody) => {
  return collectionBasedRequest.post('/register', body);
};

export const getPreCollection = (id: string) => {
  return collectionBasedRequest.get(`/pre/${id}`);
};

export const editCollection = (id: string, body: RegisterCollecionBody) => {
  return collectionBasedRequest.patch(`/edit/${id}`, body);
};
