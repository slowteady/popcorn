import {
  Box,
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
import { useRecoilValue } from "recoil";
import { collectionCartList } from "../../../../state/movieState";
import Iconify from "../../../iconify/Iconify";
import ListTableHead from "../../../layouts/tables/ListTableHead";

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
  const movies = useRecoilValue(collectionCartList);
  const [page, setPage] = useState(0);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * ROWSPERPAGE - movies.length) : 0;

  // 페이징
  const handleChangePage = (
    e: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // 휴지통 아이콘 클릭 
  const handleIconClick = () => {};

  // submit
  const handleSubmit = () => {};

  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <Card sx={{ height: "575px" }}>
        <Box onSubmit={handleSubmit} sx={{ m: 2 }}>
          <Typography color="black" fontSize={15} sx={{ mb: 1 }}>
            제목
          </Typography>
          <TextField required fullWidth size="small" sx={{ mr: 1, mb: 2 }} />
          <Typography color="black" fontSize={15} sx={{ mb: 1 }}>
            리스트
          </Typography>
          <TableContainer>
            <Table>
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
                            onClick={handleIconClick}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Typography variant="subtitle2" noWrap>
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
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={2} />
                  </TableRow>
                )}
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
        </Box>
      </Card>
    </Container>
  );
};

export default CollectionCart;
