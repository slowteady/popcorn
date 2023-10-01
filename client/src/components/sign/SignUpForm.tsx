import { Button, FormControl, FormGroup, FormHelperText, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signValidation, strValidation } from '../../utils/validation';

const initialValue = {
  email: '',
  name: '',
  password: '',
  confirmPassword: ''
};

const SignUpform = () => {
  const [formData, setFormData] = useState(initialValue);
  const { email, name, password, confirmPassword } = formData;
  const inputFields = [
    { type: 'email', fieldsName: 'email', label: '이메일', value: email },
    { type: 'text', fieldsName: 'name', label: '이름', value: name },
    { type: 'password', fieldsName: 'password', label: '패스워드', value: password },
    { type: 'password', fieldsName: 'confirmPassword', label: '패스워드 확인', value: confirmPassword }
  ];
  const [isAble, setIsAble] = useState(false);
  const navigate = useNavigate();

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    const updatedFormData = { ...formData, [name]: value };
    const isAble = inputFields.every((field) => {
      const { value, fieldsName } = field;
      const validation = strValidation.isNotEmpty(value) && signValidation.signValidate(fieldsName, updatedFormData);
      return validation && validation.isValid;
    });

    setIsAble(isAble);
  };

  const doSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const naviToSignIn = () => {
    navigate('/signin');
  };

  return (
    <FormControl fullWidth onSubmit={doSignUp} component='form'>
      <FormGroup>
        {inputFields.map((field, index) => {
          const { type, fieldsName, label, value } = field;
          const validation = strValidation.isNotEmpty(value) && signValidation.signValidate(fieldsName, formData);

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
