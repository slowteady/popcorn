import React, { FormEvent, memo } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import PopcornIcon from "../../img/popcorn_icon.jpeg";
import SignupInput from "./SignupInput";

// 회원가입 컴포넌트
const SignupPage = () => {
  const history = useHistory();

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
          <SignupInput />
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

export default memo(SignupPage);
