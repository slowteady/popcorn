import {
  Box,
  Button,
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { addCollectionConf } from "../../../../config/layout/tableConfig";
import {
  editCollection,
  getPreCollection,
  registerCollection,
} from "../../../../services/movieService";
import { collectionCartList } from "../../../../state/movieState";
import { MovieProps, payload } from "../../../../types/movies/movieTypes";
import { isSuccessValidate } from "../../../../utils/auth/userValidate";
import { msg } from "../../../../utils/msgUtils";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";
import ListTableHead from "../../../layouts/tables/ListTableHead";
import MovieModal from "../movies/MovieModal";

// ----------------------------------------------------------------------
// 컬렉션 추가 리스트 카트
// ----------------------------------------------------------------------

const { ROWSPERPAGE, TABLE_HEAD } = addCollectionConf;

const CollectionAddForm = () => {
  const [movies, setMovies] = useRecoilState(collectionCartList);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false); // 수정 페이지 여부
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { status, data } = useQuery(
    ["getPreCollection", id],
    () => getPreCollection(id),
    { enabled }
  );

  useEffect(() => {
    if (location.state && location.state.isEdit) {
      setIsEdit(true);
      setId(location.state.id);
      setEnabled(true);
    }
  }, [location]);

  useEffect(() => {
    if (status === "success" && data) {
      setCollectionTitle(data.payload.collection.collectionTitle);
      setMovies(data.payload.collection.movie);
    }
  }, [data]);

  const handleTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setCollectionTitle(e.currentTarget.value);
  };

  // 페이징
  const handleChangePage = (
    e: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // 휴지통 아이콘 클릭
  const handleIconClick = (e: MouseEvent, movie: MovieProps) => {
    e.stopPropagation();

    setMovies((prevMovies) => prevMovies.filter((m) => m !== movie));
  };

  // 타이틀 클릭 시 모달창 on/off
  const handleModalOpen = (id: number) => {
    setMovieId(id);
    setOpen(true);
  };

  const handleModalClose = () => {
    setMovieId(null);
    setOpen(false);
  };

  // 등록 버튼 클릭
  const handleBtnClick = async () => {
    let movie = [];

    if (strCheck.isEmpty(collectionTitle)) {
      msg("error", "컬렉션 제목을 작성해주세요");
      return false;
    }

    if (movies.length < 1) {
      msg("error", "영화를 한개 이상 추가해주세요");
      return false;
    } else {
      movie = movies.map((m) => {
        return {
          id: m.id,
          poster_path: m.poster_path,
          release_date: m.release_date,
          title: m.title,
          vote_average: m.vote_average,
        };
      });
    }

    let body = {
      collectionTitle,
      movie,
    };

    let service: payload;
    if (isEdit) {
      service = await editCollection(id, body);
    } else {
      service = await registerCollection(body);
    }

    const response = service;
    const isSuccess = isSuccessValidate(response);
    if (isSuccess) {
      msg("success", response.payload.msg);
      navigate("/main/collection");
    }
  };

  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <Card sx={{ height: "550px" }}>
        <Box sx={{ m: 2 }}>
          <Typography color="black" fontSize={15} sx={{ mb: 1 }}>
            제목
          </Typography>
          <TextField
            onChange={handleTextField}
            value={collectionTitle}
            required
            fullWidth
            size="small"
            sx={{ mr: 1, mb: 2 }}
          />
          <Typography color="black" fontSize={15} sx={{ mb: 1 }}>
            리스트
          </Typography>
          <TableContainer>
            <Table size="small">
              <ListTableHead headLabel={TABLE_HEAD} />
              <TableBody>
                {movies
                  .slice(page * ROWSPERPAGE, page * ROWSPERPAGE + ROWSPERPAGE)
                  .map((movie) => {
                    const { id, title, release_date } = movie;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox">
                        <TableCell align="left">
                          <Iconify
                            icon={"eva:trash-2-outline"}
                            sx={{ mr: 2, cursor: "pointer" }}
                            onClick={(e) => handleIconClick(e, movie)}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Typography
                            onClick={() => handleModalOpen(id)}
                            variant="subtitle2"
                            noWrap
                            sx={{ cursor: "pointer" }}
                          >
                            {title}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="subtitle2" noWrap>
                            {release_date}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={movies.length}
            rowsPerPage={ROWSPERPAGE}
            page={page}
            onPageChange={handleChangePage}
          />
          <Button
            onClick={handleBtnClick}
            variant="contained"
            size="medium"
            fullWidth
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            {isEdit ? "수정" : "등록"}
          </Button>
        </Box>
      </Card>
      <MovieModal id={movieId} open={open} handleClose={handleModalClose} />
    </Container>
  );
};

export default CollectionAddForm;
