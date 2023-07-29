import PendingIcon from "@mui/icons-material/Pending";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
    deleteCollection,
    getDetailData,
} from "../../../../services/movieService";
import { MovieProps } from "../../../../types/state/movies/movieTypes";
import { getCookie } from "../../../../utils/cookieUtils";
import { confirmMsg, msg } from "../../../../utils/msgUtils";
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

  const { status } = useQuery(
    ["detailData", id, page],
    () => getDetailData(id, page, LIST_COUNT),
    {
      enabled,
      onSuccess: (data) => {
        const { movie } = data?.payload.collection;
        setMovie((prevMovie) => [...prevMovie, ...movie]);
      },
    }
  );

  useEffect(() => {
    if (!location.state || !location.state.id) {
      navigate("*");
    } else {
      // 해당 게시물의 작성자일 경우
      const cookie = getCookie("AUTH_TOKEN");
      const userId = cookie._id;
      if (location.state.userId === userId) {
        setIsYours(true);
      }
      setId(location.state.id);
      setCollectionTitle(location.state.collectionTitle);
      setEnable(true);
    }
  }, [location]);

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

  // 수정 버튼
  const handleEditBtn = () => {
    navigate("/main/collection/add", { state: { id, isEdit: true } });
  };

  // 삭제 버튼
  const handleDeleteBtn = () => {
    confirmMsg("warning", "정말 삭제하시겠습니까?", "").then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteCollection(id);
        if (response.payload && response.payload.isSuccess) {
          msg("success", "삭제가 완료됐어요");
          navigate("/main/collection");
        }
      }
    });
  };

  // 목록 버튼
  const handleListBtn = () => {
    navigate("/main/collection");
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
                onClick={handleEditBtn}
                variant="contained"
                startIcon={<Iconify icon="eva:edit-fill" />}
                sx={{ mr: 1 }}
              >
                Edit
              </Button>
              <Button
                onClick={handleDeleteBtn}
                variant="contained"
                startIcon={<Iconify icon="eva:trash-2-fill" />}
                sx={{ backgroundColor: "#c53126", mr: 1 }}
              >
                Delete
              </Button>
            </Box>
          )}
        </Stack>
        <Button
          onClick={handleListBtn}
          variant="contained"
          startIcon={<Iconify icon="ph:list-fill" />}
          sx={{ backgroundColor: "#3e4857" }}
        >
          List
        </Button>
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
