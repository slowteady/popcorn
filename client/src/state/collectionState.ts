import { atom } from 'recoil';
import { MoviesData } from '../types/movie';

export const checkedMoviesState = atom<MoviesData[]>({
  key: 'checkedMoviesState',
  default: []
});

export const collectionTitle = atom({
  key: 'collectionTitle',
  default: ''
});
