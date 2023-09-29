import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    { type: 'email', name: 'email', label: '이메일', value: email },
    { type: 'text', name: 'name', label: '이름', value: name },
    { type: 'password', name: 'password', label: '패스워드', value: password },
    { type: 'password', name: 'confirmPassword', label: '패스워드 확인', value: confirmPassword }
  ];
  const navigate = useNavigate();

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const naviToSignIn = () => {
    navigate('/signin');
  };

  return (
    <FormControl fullWidth component='form'>
      <FormGroup>
        {inputFields.map((field, index) => {
          const { type, name, label, value } = field;
          return (
            <TextField
              key={index}
              required
              margin='normal'
              onChange={inputChange}
              type={type}
              name={name}
              label={label}
              value={value}
            />
          );
        })}
      </FormGroup>
      <Button type='submit' variant='contained' size='large' fullWidth sx={{ mt: 2 }}>
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
