import FaceIcon from "@mui/icons-material/Face";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/userService";
import { LoginFormObj } from "../../../types/state/users/loginTypes";
import { isSuccessValidate } from "../../../utils/auth/userValidate";
import { getCookie, setCookie } from "../../../utils/cookieUtils";
import LoginPoster from "./LoginPoster";

// ----------------------------------------------------------------------
// 로그인 페이지 컴포넌트
// ----------------------------------------------------------------------

// 초기값
const initialState: LoginFormObj = {
  Email: "",
  Password: "",
};

const LoginPage = () => {
  const [FormData, setFormData] = useState<LoginFormObj>(initialState);
  const [isRemember, setRemember] = useState(false); // 기억하기 체크박스 체크 여부
  const [isExpired, setIsExpired] = useState(false); // 토큰 만료 여부
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 토큰 만료로 인해 로그인 페이지 호출됐는지 확인
    if (location.state && location.state.expired) {
      setIsExpired(true);
    }

    // 기억하기 체크 true 인 경우
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
    const { Email, Password } = FormData;

    let body = {
      email: Email,
      password: Password,
    };

    // 로그인 검증
    const loginResult = await loginUser(body);
    const isComplete = isSuccessValidate(loginResult);

    if (isComplete) {
      // 기억하기 기능
      if (isRemember) {
        setCookie("isRemember", true, { path: "/" });
        localStorage.setItem("email", FormData.Email);
      } else {
        setCookie("isRemember", false, { path: "/", expires: new Date(0) });
        localStorage.removeItem("email");
      }

      if (isExpired) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
  };

  const handleSignupBtn = () => {
    navigate("/signup");
  };

  return (
    <>
      <Helmet>
        <title> Login | POPCORN! </title>
      </Helmet>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <LoginPoster />

        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              m: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaceIcon fontSize="large" sx={{ m: 1 }} />
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
              onClick={handleSignupBtn}
            >
              회원가입
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
