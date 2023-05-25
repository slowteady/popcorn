import React from "react";
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
import PopcornIcon from "../../img/popcorn_icon.jpeg";

// 로그인 페이지
const LoginPage = () => {
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
        ></Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
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
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#435c77",
            "&:hover": {
              backgroundColor: "#454468",
            },
          }}
          fullWidth
        >
          회원가입
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
