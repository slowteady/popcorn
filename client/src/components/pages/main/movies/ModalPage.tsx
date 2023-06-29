import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../../../Config";
import { getMovieDetailData } from "../../../../services/movieService";
import { Grid } from "@mui/material";

// ----------------------------------------------------------------------
// 모달 페이지
// ----------------------------------------------------------------------

interface ModalPageProps {
  id: number;
}

const ModalPage = ({ id }: ModalPageProps) => {
  const [movie, setMovie] = useState({});

  const url = `${API.BASE_URL}movie/${id}`;
  const { status, data } = useQuery(
    ["movieDetailData", url],
    () => getMovieDetailData(url),
  );

  useEffect(() => {
    if (status === "success") {
      setMovie({ ...data.payload });
    }
  }, [data]);

  return (
    <>
      <Grid container spacing={1}></Grid>
    </>
  );
};

export default ModalPage;
