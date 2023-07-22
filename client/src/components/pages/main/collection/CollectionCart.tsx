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
import React, { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { collectionCartList } from "../../../../state/movieState";
import { MovieProps } from "../../../../types/movies/movieTypes";
import Iconify from "../../../iconify/Iconify";
import ListTableHead from "../../../layouts/tables/ListTableHead";
import MovieModal from "../movies/MovieModal";

// ----------------------------------------------------------------------
// 컬렉션 추가 리스트 카트
// ----------------------------------------------------------------------

// 한 페이지 행 갯수
const ROWSPERPAGE = 5;

// 테이블 헤더 Config
const TABLE_HEAD = [
  { id: "title", label: "제목", alignRight: false },
  { id: "release_date", label: "릴리즈", alignRight: false },
];

const CollectionCart = () => {
  const [movies, setMovies] = useRecoilState(collectionCartList);
  const [open, setOpen] = useState(false);
  const [movieId, setMovieId] = useState<number | null>(null);
  const [page, setPage] = useState(0);

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

  // submit
  const handleSubmit = () => {};

  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <Card sx={{ height: "550px" }}>
        <Box onSubmit={handleSubmit} sx={{ m: 2 }}>
          <Typography color="black" fontSize={15} sx={{ mb: 1 }}>
            제목
          </Typography>
          <TextField required fullWidth size="small" sx={{ mr: 1, mb: 2 }} />
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
            variant="contained"
            type="submit"
            size="medium"
            fullWidth
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            등록
          </Button>
        </Box>
      </Card>
      <MovieModal id={movieId} open={open} handleClose={handleModalClose} />
    </Container>
  );
};

export default CollectionCart;
