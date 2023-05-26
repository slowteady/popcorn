import React from "react";
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

const SignUpPage = () => {
  const history = useHistory();
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
        <TextField
          label="이름"
          margin="normal"
          name="name"
          required
          fullWidth
        />
        <TextField
          label="이메일"
          margin="normal"
          autoComplete="email"
          name="email"
          required
          fullWidth
        />
        <TextField
          label="패스워드"
          margin="normal"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          fullWidth
        />
        <TextField
          label="패스워드 확인"
          margin="normal"
          type="password"
          name="confirmPassword"
          autoComplete="current-password"
          required
          fullWidth
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
        <Button
          type="submit"
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

export default SignUpPage;
