import { atom, selector } from 'recoil';
import { MOVIE_PATH } from '../api/movie/movieApiPaths';
import { FILTER_OPTION } from '../config/movie/movieConfig';
import { FilterOption } from '../types/movie';

export const filterState = atom<FilterOption>({
  key: 'filterState',
  default: FILTER_OPTION[0]
});

export const filteredPath = selector({
  key: 'filteredPath',
  get: ({ get }) => {
    const atom = get(filterState);
    const { value } = atom;
    const { NOWPLAYING_PATH, POPULAR_PATH, TOP_RATED } = MOVIE_PATH;
    const filter = {
      NOWPLAYING: NOWPLAYING_PATH,
      POPULAR: POPULAR_PATH,
      TOPRATED: TOP_RATED
    };

    return filter[value];
  }
});
