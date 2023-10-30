import { Button, FormControl, FormGroup, FormHelperText, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_CODE } from '../../api/code';
import paths from '../../config/routes/paths';
import useBtnAble from '../../hooks/useBtnAble';
import { registerUser } from '../../service/userService';
import { errorHandler } from '../../utils/exceptionHandler';
import { signValidation, strValidation } from '../../utils/validation';

const OVERLAPPING_MSG = '이미 가입된 회원이 있습니다.';
const OVERLAPPING_CODE = 11000;

const { signin } = paths.sign;

const INITIAL_VALUE = {
  email: '',
  name: '',
  password: '',
  confirmPassword: ''
};

const SignUpform = () => {
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const { email, name, password, confirmPassword } = formData;
  const inputFields = [
    { type: 'email', fieldsName: 'email', label: '이메일', value: email },
    { type: 'text', fieldsName: 'name', label: '이름', value: name },
    { type: 'password', fieldsName: 'password', label: '패스워드', value: password },
    { type: 'password', fieldsName: 'confirmPassword', label: '패스워드 확인', value: confirmPassword }
  ];
  const isAble = useBtnAble(inputFields, formData, signValidation.signUpValidate.bind(signValidation));
  const navigate = useNavigate();

  const signUpMutation = useMutation(registerUser, {
    onSuccess: (response) => {
      const { status, data } = response;

      if (status === SUCCESS_CODE && data.isSuccess) {
        navigate(signin);
      } else if (!data.isSuccess && data.code === OVERLAPPING_CODE) {
        throw new Error(OVERLAPPING_MSG);
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

  const doSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUpMutation.mutate(formData);
  };

  const naviToSignIn = () => {
    navigate(signin);
  };

  return (
    <FormControl fullWidth onSubmit={doSignUp} component='form'>
      <FormGroup>
        {inputFields.map((field, index) => {
          const { type, fieldsName, label, value } = field;
          const validation = strValidation(value).isNotEmpty() && signValidation.signUpValidate(fieldsName, formData);

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
      </FormGroup>
      <Button type='submit' variant='contained' size='large' disabled={!isAble} fullWidth sx={{ mt: 2 }}>
        회원가입
      </Button>
      <Button type='button' variant='contained' size='large' onClick={naviToSignIn} sx={buttonSx}>
        취소
      </Button>
    </FormControl>
  );
};

const buttonSx = {
  marginTop: '12px',
  backgroundColor: '#c97c63',
  '&:hover': {
    backgroundColor: '#ab6e59'
  }
};

export default SignUpform;
