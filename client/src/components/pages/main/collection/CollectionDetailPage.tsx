import PendingIcon from "@mui/icons-material/Pending";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetailData } from "../../../../services/movieService";
import { MovieProps } from "../../../../types/movies/movieTypes";
import MovieList from "../movies/MovieList";

// 1. state로 넘어오는 id 받기 - O
// - 다른 타이틀 누를 때 마다 바뀌니까 useEffect 처리, setEnable(true)로 변경해서 데이터 요청 - O
// 2. 받은 id로 데이터 요청 - O
// - 받은 데이터 계속 바뀌니까 state로 처리, useEffect - [data] 로 변경 감지하여 자동 변경 처리 - O
// 3. 받은 데이터로 앨범형 리스트 렌더링
// 4. 무한 스크롤 페이징 처리

const CollectionDetailPage = () => {
  const [id, setId] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");
  const [collection, setCollection] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [enabled, setEnable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { status, data } = useQuery(
    ["detailData", id],
    () => getDetailData(id, page),
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
      setCollection([...data]);
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
      {collection && <MovieList isCollection={false} movies={collection} />}
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
