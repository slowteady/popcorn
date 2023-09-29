import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  email: '',
  password: '',
  isRemember: false
};

const SignInForm = () => {
  const [formData, setFormData] = useState(initialValue);
  const { email, password, isRemember } = formData;
  const navigate = useNavigate();

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkBoxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const naviToSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
      <FormControl fullWidth component='form' sx={formSx}>
        <FormGroup>
          <TextField required margin='normal' name='email' label='이메일' onChange={inputChange} value={email} />
          <TextField
            required
            margin='normal'
            type='password'
            name='password'
            label='패스워드'
            onChange={inputChange}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox name='isRemember' onChange={checkBoxClick} checked={isRemember} color='info' />}
            label='기억하기'
          />
        </FormGroup>
        <Button type='submit' variant='contained' size='large' fullWidth sx={{ mt: 1 }}>
          로그인
        </Button>
        <Button type='button' variant='contained' size='large' onClick={naviToSignUp} sx={buttonSx}>
          회원가입
        </Button>
      </FormControl>
    </>
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
