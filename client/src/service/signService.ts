import { signRequest } from '../api/sign/signApiInstance';
import { BasicForm, SignUpForm } from '../types/sign';

export const registerUser = (body: SignUpForm) => {
  return signRequest.post('/register', body);
};
export const loginUser = (body: BasicForm) => {
  return signRequest.post('/login', body);
};
export const authCheck = () => {
  return signRequest.get('/auth');
};
