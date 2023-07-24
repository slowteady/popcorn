import {
  Box,
  Card,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getListBoardData } from "../../../../services/movieService";
import { ListCollectionObj } from "../../../../types/movies/movieTypes";
import ListTableHead from "../../../layouts/tables/ListTableHead";

// ----------------------------------------------------------------------
// 컬렉션 리스트 게시판형
// ----------------------------------------------------------------------

// 한 페이지 행 갯수
const ROWSPERPAGE = 10;

// 테이블 헤더 Config
const TABLE_HEAD = [
  { id: "collection", label: "컬렉션", alignRight: false },
  { id: "author", label: "큐레이터", alignRight: false },
  { id: "rgstDate", label: "등록일자", alignRight: false },
];

const CollectionListBoard = () => {
  const [collection, setCollection] = useState<ListCollectionObj[]>([]);
  const [page, setPage] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const { status, data } = useQuery(
    ["listBoardData", page],
    () => getListBoardData(page, ROWSPERPAGE),
    { enabled }
  );

  useEffect(() => {
    setEnabled(true);
  }, [page]);

  useEffect(() => {
    if (status === "success") {
      console.log(data);
      const collection = data.payload;
      setCollection(collection);
    }
  }, [data]);

  return (
    <Card sx={{ maxHeight: "700px", mt: "40px" }}>
      <Box>
        <TableContainer>
          <Table size="medium" sx={{ tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "60%" }}></col>
              <col style={{ width: "20%" }}></col>
              <col style={{ width: "20%" }}></col>
            </colgroup>
            <ListTableHead
              headLabel={TABLE_HEAD}
              isColList={true}
              sx={{ backgroundColor: "#e1f0ff" }}
            />
            {collection && (
              <TableBody>
                {collection.map((col, index) => {
                  const { user, collectionTitle, rgstDate, movie } = col;
                  const date = rgstDate.toString().substring(0, 10);

                  return (
                    <TableRow hover key={index} tabIndex={-1} role="row">
                      <TableCell align="center">
                        <Typography
                          variant="subtitle2"
                          noWrap
                          sx={{ cursor: "pointer" }}
                        >
                          {collectionTitle}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" noWrap>
                          {user.userName}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="subtitle2" noWrap>
                          {date}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <Pagination
          count={20}
          size="medium"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "right",
            m: 1,
          }}
        />
      </Box>
    </Card>
  );
};

export default CollectionListBoard;
