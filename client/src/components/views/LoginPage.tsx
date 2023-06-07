import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../services/userService";
import { LoginForm } from "../../types/users/userTypes";
import { getCookie, setCookie } from "../../utils/cookieUtils";
import { loginAndOutValidate } from "../auth/userValidate";
import PopcornIcon from "../img/popcorn_icon.jpeg";

const initialState: LoginForm = {
  Email: "",
  Password: "",
};

// 로그인 페이지
const LoginPage = () => {
  const history = useHistory();

  // state
  const [FormData, setFormData] = useState<LoginForm>(initialState);
  const [isRemember, setRemember] = useState(false);

  // 기억하기
  useEffect(() => {
    const isRememberCookie = getCookie("isRemember");
    if (isRememberCookie) {
      const saveEmail = localStorage.getItem("email");
      setFormData((prevData) => ({ ...prevData, Email: saveEmail || "" }));
      setRemember(true);
    }
  }, []);

  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setRemember(e.currentTarget.checked);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = new URLSearchParams(location.search);
    const expired = queryParams.get("expired");

    const { Email, Password } = FormData;

    let body = {
      email: Email,
      password: Password,
    };

    const loginResult = await loginUser(body);

    // 로그인 검증
    const isComplete = loginAndOutValidate(loginResult);
    if (isComplete) {
      // 기억하기 기능
      if (isRemember) {
        setCookie("isRemember", true, { path: "/" });
        localStorage.setItem("email", FormData.Email);
      } else {
        setCookie("isRemember", false, { path: "/", expires: new Date(0) });
        localStorage.removeItem("email");
      }

      if (expired) {
        history.goBack();
      } else {
        history.push("/main");
      }
    }
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
            name="Email"
            required
            fullWidth
            onChange={onChangeHandler}
            value={FormData.Email}
          />
          <TextField
            label="패스워드"
            margin="normal"
            type="password"
            name="Password"
            autoComplete="current-password"
            required
            fullWidth
            onChange={onChangeHandler}
            value={FormData.Password}
          />
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    checked={isRemember}
                    onChange={onChangeCheckBox}
                    color="info"
                  />
                }
                label="기억하기"
              />
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
