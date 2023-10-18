import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_CODE } from '../../api/code';
import paths from '../../config/routes/paths';
import useBtnAble from '../../hooks/useBtnAble';
import { loginUser } from '../../service/signService';
import { getCookie, removeCookie, setCookie } from '../../utils/cookieManager';
import { errorHandler } from '../../utils/exceptionHandler';
import { signValidation, strValidation } from '../../utils/validation';

const PASSWORD_NOT_CORRECT_MSG = '패스워드가 일치하지 않습니다.';
const REMEMBER_ME_COOKIE_KEY = 'REMEMBER_ME';
const PASSWORD_NOT_CORRECT_CODE = 10000;

const { signup } = paths.sign;
const { main } = paths.main;

const SignInForm = () => {
  const rememberMeCookie = getCookie(REMEMBER_ME_COOKIE_KEY);
  const INITIAL_VALUE = {
    email: rememberMeCookie || '',
    password: '',
    rememberMe: Boolean(rememberMeCookie)
  };
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const { email, password, rememberMe } = formData;
  const inputFields = [
    { type: 'email', fieldsName: 'email', label: '이메일', value: email },
    { type: 'password', fieldsName: 'password', label: '패스워드', value: password }
  ];
  const isAble = useBtnAble(inputFields, formData, signValidation.signInValidate.bind(signValidation));
  const navigate = useNavigate();

  const signInMutation = useMutation(loginUser, {
    onSuccess: (response) => {
      const { status, data } = response;

      if (status === SUCCESS_CODE && data.isSuccess) {
        formData.rememberMe ? setCookie(REMEMBER_ME_COOKIE_KEY, formData.email) : removeCookie(REMEMBER_ME_COOKIE_KEY);
        navigate(main);
      } else if (!data.isSuccess && data.code === PASSWORD_NOT_CORRECT_CODE) {
        throw new Error(PASSWORD_NOT_CORRECT_MSG);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkBoxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const doSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { email, password };
    signInMutation.mutate(body);
  };

  const naviToSignUp = () => {
    navigate(signup);
  };

  return (
    <FormControl fullWidth component='form' onSubmit={doSignIn} sx={formSx}>
      <FormGroup>
        {inputFields.map((fields, index) => {
          const { type, fieldsName, label, value } = fields;
          const validation = strValidation(value).isNotEmpty() && signValidation.signInValidate(fieldsName, formData);

          return (
            <Fragment key={index}>
              <TextField
                key={`${index}-field`}
                required
                margin='normal'
                autoComplete='new-password'
                onChange={inputChange}
                type={type}
                name={fieldsName}
                label={label}
                value={value}
                error={validation ? !validation.isValid : false}
              />
              {validation && !validation.isValid && (
                <FormHelperText key={`${index}-helper`} sx={{ color: '#e91b1b', fontWeight: 'bold' }}>
                  {validation.errorMessage}
                </FormHelperText>
              )}
            </Fragment>
          );
        })}
        <FormControlLabel
          control={<Checkbox name='rememberMe' onChange={checkBoxClick} checked={rememberMe} color='info' />}
          label='기억하기'
        />
      </FormGroup>
      <Button type='submit' variant='contained' size='large' disabled={!isAble} fullWidth sx={{ mt: 1 }}>
        로그인
      </Button>
      <Button type='button' variant='contained' size='large' onClick={naviToSignUp} sx={buttonSx}>
        회원가입
      </Button>
    </FormControl>
  );
};

const formSx = {
  minWidth: '300px',
  maxWidth: '600px',
  marginTop: '12px'
};

const buttonSx = {
  marginTop: '12px',
  backgroundColor: '#435c77',
  '&:hover': {
    backgroundColor: '#454468'
  }
};

export default SignInForm;
