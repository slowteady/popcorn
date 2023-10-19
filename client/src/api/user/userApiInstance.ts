import axios from 'axios';

const BASE_URL = '/api/users';

const defaultOptions = {
  timeout: 1000,
  baseURL: BASE_URL
};

export const userRequest = axios.create({
  ...defaultOptions
});
