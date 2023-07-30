import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { MOVIE_API } from "../../config/api/dataConfig";
import { getPoster } from "../../services/movieService";

// ----------------------------------------------------------------------
// 로그인 페이지 포스터 컴포넌트
// ----------------------------------------------------------------------

// 랜덤으로 추출 후 URL 리턴
const getRandomUrl = (arr: []) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];

  return `${MOVIE_API.IMAGE_BASE_URL}${MOVIE_API.IMAGE_SIZE_ORIGINAL}${randomElement}`;
};

const LoginPoster = () => {
  const [posterUrl, setPosterUrl] = useState("");

  useQuery(["getPoster"], () => getPoster(), {
    onSuccess: (data) => {
      const url = getRandomUrl(data);
      setPosterUrl(url);
    },
    onError: () => {
      setPosterUrl("");
    },
  });

  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={5}
      sx={{
        backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default LoginPoster;
