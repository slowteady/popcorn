import { AxiosResponse } from 'axios';
import { signRequest } from '../api/sign/signApiInstance';
import { BasicForm, SignUpForm } from '../types/sign';

export interface userDataType {
  user: {
    id: string;
    email: string;
    image: string;
    intro: string;
    name: string;
  };
}

export const registerUser = (body: SignUpForm) => {
  return signRequest.post('/register', body);
};

export const loginUser = (body: BasicForm) => {
  return signRequest.post('/login', body);
};

export const logoutUser = () => {
  return signRequest.delete('/logout');
};

export const authCheck = (): Promise<AxiosResponse<userDataType>> => {
  return signRequest.get('/auth');
};
