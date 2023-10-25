import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MOVIE_URL = `${BASE_URL}/movie`;
export const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const defaultOptions = {
  timeout: 1000,
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, accept: 'application/json' },
  params: { language: 'ko-KR' }
};

export const movieBasedRequest = axios.create({
  baseURL: BASE_URL,
  ...defaultOptions
});

export const movieDataRequest = axios.create({
  baseURL: MOVIE_URL,
  ...defaultOptions
});

export const movieImageRequest = axios.create({
  baseURL: IMAGE_URL,
  ...defaultOptions
});
