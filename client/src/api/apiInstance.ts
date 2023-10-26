import axios from 'axios';

const createInstance = (baseURL = '', options = {}) => {
  const option = {
    timeout: 1000,
    baseURL,
    ...options
  };

  return axios.create(option);
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MOVIE_URL = `${BASE_URL}/movie`;
const USER_PATH = '/api/users';
const COLLECTION_PATH = '/api/collections';
const DETAIL_PATH = '/detail';
export const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const defaultOptions = {
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, accept: 'application/json' },
  params: { language: 'ko-KR' }
};

export const userRequest = createInstance(USER_PATH);
export const movieBasedRequest = createInstance(BASE_URL, defaultOptions);
export const movieDataRequest = createInstance(MOVIE_URL, defaultOptions);
export const movieImageRequest = createInstance(IMAGE_URL, defaultOptions);
export const collectionBasedRequest = createInstance(COLLECTION_PATH);
export const collectionDetailRequest = createInstance(COLLECTION_PATH + DETAIL_PATH);
