import { selectorFamily } from 'recoil';
import { authCheck } from '../service/signService';

type FilterOption = 'Main' | 'Profile';

export const USER_MAIN_OPTION = 'Main';
export const USER_PROFILE_OPTION = 'Profile';

export const userSelector = selectorFamily({
  key: 'userSelector',
  get: (option: FilterOption) => async () => {
    const response = await authCheck();
    const { email, image, intro, name } = response.data.user;

    switch (option) {
      case USER_MAIN_OPTION:
        return { image, name };
      case USER_PROFILE_OPTION:
        return { email, image, intro, name };
    }
  }
});
