import { collectionBasedRequest } from '../api/apiInstance';

export const getCollection = (page: number, limit: number) => {
  return collectionBasedRequest.get(`/${page}`, { params: { limit } });
};
