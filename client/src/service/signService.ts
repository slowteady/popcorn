import { signRequest } from '../api/sign/signApiInstance';
import { SignUpForm } from '../types/sign';

export const registerUser = (body: SignUpForm) => {
  return signRequest.post('/register', body);
};
