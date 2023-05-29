import React, {
  ChangeEvent,
  FormEvent,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from "react";
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
import { onError, validate } from "../auth/signupAuth";
import { Action, userReducer } from "../../state/reducers/users/userReducer";
import { registerUser } from "../../state/reducers/actions/userAction";
import Swal from "sweetalert2";

export interface Form {
  Name: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  payload?: { isSuccess: boolean; msg?: unknown };
}

const initialState: Form = {
  Email: "vbn0213@naver.com",
  Name: "이용민",
  Password: "Skaksdkfdk4!",
  ConfirmPassword: "Skaksdkfdk4!",
};

// 회원가입 컴포넌트
const SignupPage = () => {
  const history = useHistory();
  const [FormData, setFormData] = useState<Form>(initialState);
  const [state, dispatch] = useReducer<Reducer<Form, Action>>(
    userReducer,
    initialState
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { Email, Name, Password } = FormData;
    e.preventDefault();

    // 데이터 검증
    validate(FormData);

    let body = {
      email: Email,
      name: Name,
      password: Password,
    };

    // 상태 업데이트
    dispatch(await registerUser(body));

    // 회원가입 성공 시
    if (state.payload && state.payload.isSuccess) {
      Swal.fire({
        icon: "success",
        title: "회원가입이 완료되었어요",
      });
      history.push("/");
    } else {
      onError();
    }
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
            label="이름"
            margin="normal"
            name="Name"
            required
            fullWidth
            onChange={onChangeHandler}
            value={FormData.Name}
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
          <TextField
            label="패스워드 확인"
            margin="normal"
            type="password"
            name="ConfirmPassword"
            required
            fullWidth
            onChange={onChangeHandler}
            value={FormData.ConfirmPassword}
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
