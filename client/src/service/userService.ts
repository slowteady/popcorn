import { AxiosResponse } from 'axios';
import { userRequest } from '../api/apiInstance';
import { BasicForm, SignUpForm } from '../types/sign';

interface userDataType {
  user: {
    id: string;
    email: string;
    image: string;
    intro: string;
    name: string;
  };
}

interface UpdateUserForm {
  id: string;
  body: { image: File | string; intro: string };
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

export const updateUser = ({ id, body }: UpdateUserForm) => {
  return userRequest.patch(`/update/${id}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
