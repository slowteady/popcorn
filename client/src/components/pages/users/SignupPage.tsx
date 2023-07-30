import FaceIcon from "@mui/icons-material/Face";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { FormEvent, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/userService";
import { SignupFormObj } from "../../../types/state/users/signupTypes";
import {
  inputValidate,
  signupValidate,
} from "../../../utils/auth/userValidate";

// ----------------------------------------------------------------------
// 회원가입 페이지 컴포넌트
// ----------------------------------------------------------------------

// 초기값
const initialState: SignupFormObj = {
  Email: "",
  Name: "",
  Password: "",
  ConfirmPassword: "",
};

const SignupPage = () => {
  const refs = {
    emailInput: useRef<HTMLInputElement>(null),
    nameInput: useRef<HTMLInputElement>(null),
    pwInput: useRef<HTMLInputElement>(null),
    pwConfirmInput: useRef<HTMLInputElement>(null),
  };
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { emailInput, nameInput, pwInput, pwConfirmInput } = refs;
    let formData = initialState;

    if (emailInput.current && emailInput.current.value) {
      formData.Email = emailInput.current.value;
    }

    if (nameInput.current && nameInput.current.value) {
      formData.Name = nameInput.current.value;
    }

    if (pwInput.current && pwInput.current.value) {
      formData.Password = pwInput.current.value;
    }

    if (pwConfirmInput.current && pwConfirmInput.current.value) {
      formData.ConfirmPassword = pwConfirmInput.current.value;
    }

    const { Email, Name, Password } = formData;

    // 데이터 검증
    const isValid = inputValidate(formData);

    // 검증 실패 시 프로세스 중단
    if (!isValid) {
      return;
    }

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    // 회원 가입
    const response = await registerUser(body);
    const isComplete = signupValidate(response);
    
    if (isComplete) {
      navigate("/login");
    }
  };

  const onClickCancel = () => {
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title> Signup | POPCORN! </title>
      </Helmet>

      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FaceIcon fontSize="large" sx={{ m: 1 }} />
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              inputRef={refs.emailInput}
              label="이메일"
              margin="normal"
              autoComplete="email"
              name="Email"
              required
              fullWidth
            />
            <TextField
              inputRef={refs.nameInput}
              label="이름"
              margin="normal"
              name="Name"
              required
              fullWidth
            />
            <TextField
              inputRef={refs.pwInput}
              label="패스워드"
              margin="normal"
              type="password"
              name="Password"
              autoComplete="current-password"
              required
              fullWidth
            />
            <TextField
              inputRef={refs.pwConfirmInput}
              label="패스워드 확인"
              margin="normal"
              type="password"
              name="ConfirmPassword"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
            >
              회원가입
            </Button>
          </form>
          <Button
            onClick={onClickCancel}
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: "#c97c63",
              "&:hover": {
                backgroundColor: "#ab6e59",
              },
            }}
          >
            취소
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default SignupPage;
