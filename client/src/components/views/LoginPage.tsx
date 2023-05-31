import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import PopcornIcon from "../img/popcorn_icon.jpeg";
import { LoginForm } from "../../types/users/userTypes";
import { loginUser } from "../../services/userService";

const initialState: LoginForm = {
  Email: "",
  Password: "",
};

// 로그인 컴포넌트
const LoginPage = () => {
  const history = useHistory();
  const [FormData, setFormData] = useState<LoginForm>(initialState);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Email, Password } = FormData;

    let body = {
      email: Email,
      password: Password,
    };

    const loginResult = await loginUser(body);
    
  };

  const onClickSignUp = () => {
    history.push("/signup");
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
          로그인
        </Typography>
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <TextField
            label="이메일"
            margin="normal"
            autoComplete="email"
            name="email"
            required
            fullWidth
            onChange={onChangeHandler}
            value={FormData.Email}
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
            value={FormData.Password}
          />
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox value="remember" color="info" />}
                label="기억하기"
              />
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <Link href="#" variant="body2">
                {"비밀번호 찾기"}
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, mb: 2 }}
            fullWidth
          >
            로그인
          </Button>
        </form>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#435c77",
            "&:hover": {
              backgroundColor: "#454468",
            },
          }}
          fullWidth
          onClick={onClickSignUp}
        >
          회원가입
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
