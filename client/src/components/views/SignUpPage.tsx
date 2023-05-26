import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import PopcornIcon from "../../img/popcorn_icon.jpeg";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// 회원가입 컴포넌트
const SignupPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickCancel = () => {
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main" }}
          src={PopcornIcon}
          alt="popcorn_icon"
        />
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="이름"
            margin="normal"
            name="name"
            required
            fullWidth
            onChange={onChangeHandler}
            value={formData.name}
          />
          <TextField
            label="이메일"
            margin="normal"
            autoComplete="email"
            name="email"
            required
            fullWidth
            onChange={onChangeHandler}
            value={formData.email}
          />
          <TextField
            label="패스워드"
            margin="normal"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            fullWidth
            onChange={onChangeHandler}
            value={formData.password}
          />
          <TextField
            label="패스워드 확인"
            margin="normal"
            type="password"
            name="confirmPassword"
            required
            fullWidth
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, mb: 2 }}
            fullWidth
          >
            회원가입
          </Button>
        </form>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#c97c63",
            "&:hover": {
              backgroundColor: "#ab6e59",
            },
          }}
          fullWidth
          onClick={onClickCancel}
        >
          취소
        </Button>
      </Box>
    </Container>
  );
};

export default SignupPage;
