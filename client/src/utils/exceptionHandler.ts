import { customAlert } from './customAlert';

const COMMON_MSG = '예상치 못한 오류가 발생했습니다.';

export const errorHandler = (error: Error) => {
  customAlert(error instanceof Error ? error.message : COMMON_MSG);
};
