import { atom, selector, selectorFamily } from 'recoil';
import { authCheck } from '../service/userService';

type FilterOption = 'MAIN' | 'PROFILE';

export const USER_MAIN_OPTION = 'MAIN';
export const USER_PROFILE_OPTION = 'PROFILE';

const userAuthSelector = selector({
  key: 'userAuthSelector',
  get: async () => {
    const response = await authCheck();
    return response.data.user;
  }
});

export const userAtom = atom({
  key: 'userAtom',
  default: userAuthSelector
});

export const userSelector = selectorFamily({
  key: 'userSelector',
  get:
    (option: FilterOption) =>
    async ({ get }) => {
      const user = get(userAtom);
      const { email, image, intro, name } = user;

      switch (option) {
        case USER_MAIN_OPTION:
          return { image, name };
        case USER_PROFILE_OPTION:
          return { email, image, intro, name };
      }
    }
});
