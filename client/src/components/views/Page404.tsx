import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Container, Typography, Box, Button } from "@mui/material";
import img404 from "../img/illustration_404.svg";

// -------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// -------------------------------------------------------------

const Page404 = () => {
  return (
    <>
      <h2>
        <title> 404 Page not Found | POPCORN! </title>
      </h2>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            죄송해요, 페이지를 찾지 못했어요!
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            유효한 페이지로 요청해주세요.
          </Typography>
          <Box
            component="img"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            src={img404}
          />
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            메인으로
          </Button>
        </StyledContent>
      </Container>
    </>
  );
};

export default Page404;
