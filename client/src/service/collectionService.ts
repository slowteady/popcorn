import { collectionBasedRequest, collectionDetailRequest } from '../api/apiInstance';

export const getCollection = (page: number, limit: number) => {
  return collectionBasedRequest.get(`/${page}`, { params: { limit } });
};

export const getCollectionDetail = (id: string, page: number, limit: number) => {
  return collectionDetailRequest.get(`/${id}`, { params: { page, limit } });
};
