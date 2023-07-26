import PendingIcon from "@mui/icons-material/Pending";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetailData } from "../../../../services/movieService";
import { MovieProps } from "../../../../types/movies/movieTypes";
import MovieList from "../movies/MovieList";

// ----------------------------------------------------------------------
// 컬렉션 디테일 페이지
// ----------------------------------------------------------------------

const LIST_COUNT = 20;

const CollectionDetailPage = () => {
  const [id, setId] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");
  const [movie, setMovie] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [enabled, setEnable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { status, data } = useQuery(
    ["detailData", id, page],
    () => getDetailData(id, page, LIST_COUNT),
    { enabled }
  );

  useEffect(() => {
    if (!location.state || !location.state.id) {
      navigate("*");
    } else {
      setId(location.state.id);
      setCollectionTitle(location.state.collectionTitle);
      setEnable(true);
    }
  }, [location]);

  useEffect(() => {
    if (status === "success") {
      const { movie } = data?.payload.collection;
      setMovie((prevMovie) => [...prevMovie, ...movie]);
    }
  }, [data]);

  const handleView = (inView: boolean) => {
    // 초기 렌더링 시 로직 두번 타는 거 방지
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Container>
      <Typography title={collectionTitle} variant="h4" sx={{ mb: 5 }} noWrap>
        {collectionTitle}
      </Typography>
      {movie && <MovieList isCollection={false} movies={movie} />}
      <InView onChange={handleView}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            mt: "20px",
          }}
        >
          {status === "loading" && <PendingIcon fontSize="large" />}
        </Box>
      </InView>
    </Container>
  );
};

export default CollectionDetailPage;
