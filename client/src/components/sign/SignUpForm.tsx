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
        <TextField required margin='normal' name='email' label='이메일' onChange={inputChange} value={email} />
        <TextField required margin='normal' name='name' label='이름' onChange={inputChange} value={name} />
        <TextField required margin='normal' name='password' label='패스워드' onChange={inputChange} value={password} />
        <TextField
          required
          margin='normal'
          name='confirmPassword'
          label='패스워드 확인'
          onChange={inputChange}
          value={confirmPassword}
        />
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
