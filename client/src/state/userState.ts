import { atom, selector } from 'recoil';
import { authCheck } from '../service/signService';

type FilterOption = 'Main' | 'My Page';

export const userAtom = atom<FilterOption>({
  key: 'userAtom',
  default: 'Main'
});

export const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    const option = get(userAtom);
    const response = await authCheck();
    const { email, image, intro, name } = response.data.user;

    switch (option) {
      case 'Main':
        return { image, name };
      case 'My Page':
        return { email, image, intro, name };
    }
  }
});
