import { AxiosResponse } from 'axios';
import { userRequest } from '../api/user/userApiInstance';
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
  return userRequest.post('/register', body);
};

export const loginUser = (body: BasicForm) => {
  return userRequest.post('/login', body);
};

export const logoutUser = () => {
  return userRequest.delete('/logout');
};

export const authCheck = (): Promise<AxiosResponse<userDataType>> => {
  return userRequest.get('/auth');
};
