import PendingIcon from "@mui/icons-material/Pending";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetailData } from "../../../../services/movieService";
import { MovieProps } from "../../../../types/movies/movieTypes";
import { getCookie } from "../../../../utils/cookieUtils";
import { confirmMsg } from "../../../../utils/msgUtils";
import Iconify from "../../../iconify/Iconify";
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
  const [isYours, setIsYours] = useState(false);
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
      const cookie = getCookie("AUTH_TOKEN");
      const userId = cookie._id;

      // 해당 게시물의 작성자일 경우
      if (location.state.userId === userId) {
        setIsYours(true);
      }
      setId(location.state.id);
      setCollectionTitle(location.state.collectionTitle);
      setEnable(true);
    }
  }, [location]);

  useEffect(() => {
    if (status === "success" && data) {
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

  const handleDeleteBtn = (e: MouseEvent<HTMLButtonElement>) => {
    confirmMsg("warning", "정말 삭제하시겠습니까?", "");
  };

  return (
    <Container>
      <Typography title={collectionTitle} variant="h4" noWrap>
        {collectionTitle}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap-reverse"
        alignItems="center"
        justifyContent="flex-end"
        mb={3}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {isYours && (
            <Box>
              <Button
                variant="contained"
                startIcon={<Iconify icon="eva:edit-fill" />}
                sx={{ mx: 1 }}
              >
                Edit
              </Button>
              <Button
                onClick={handleDeleteBtn}
                variant="contained"
                startIcon={<Iconify icon="eva:trash-2-fill" />}
                sx={{ backgroundColor: "#c53126" }}
              >
                Delete
              </Button>
            </Box>
          )}
        </Stack>
      </Stack>

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
