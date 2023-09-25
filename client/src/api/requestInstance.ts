import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMAGE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const defaultOptions = {
  timeout: 1000,
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, accept: 'application/json' },
  params: { language: 'ko-KR' }
};

export const commonRequest = axios.create({
  baseURL: BASE_URL,
  ...defaultOptions
});

export const imageRequest = axios.create({
  baseURL: IMAGE_URL,
  ...defaultOptions
});
