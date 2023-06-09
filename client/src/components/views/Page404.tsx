import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import img404 from "../img/illustration_404.svg";
import { Helmet } from "react-helmet-async";

// -------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "75vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// -------------------------------------------------------------

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | POPCORN! </title>
      </Helmet>
      
      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h4" paragraph>
            페이지를 찾지 못했어요!
          </Typography>
          
          <Typography sx={{ color: "text.secondary" }}>
            유효한 페이지로 요청해주세요.
          </Typography>

          <Box
            component="img"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            src={img404}
          />
          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            메인으로
          </Button>
        </StyledContent>
      </Container>
    </>
  );
};

export default Page404;
