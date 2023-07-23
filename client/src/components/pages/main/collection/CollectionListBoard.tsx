import { Box, Card, Table, TableContainer } from "@mui/material";
import React, { useState, useEffect } from "react";
import ListTableHead from "../../../layouts/tables/ListTableHead";
import { useQuery } from "react-query";
import { getListBoardData } from "../../../../services/movieService";

// ----------------------------------------------------------------------
// 컬렉션 리스트 게시판형
// ----------------------------------------------------------------------

// 한 페이지 행 갯수
const ROWSPERPAGE = 10;

// 테이블 헤더 Config
const TABLE_HEAD = [
  { id: "collection", label: "컬렉션", alignRight: false },
  { id: "rgstDate", label: "등록일자", alignRight: false },
  { id: "author", label: "큐레이터", alignRight: false },
];

const CollectionListBoard = () => {
  const [page, setPage] = useState(0);
  const [enabled, setEnabled] = useState(true);

  const { status, data } = useQuery(
    ["listBoardData", page],
    () => getListBoardData(page, ROWSPERPAGE),
    { enabled }
  );

  return (
    <Card sx={{ maxHeight: "550px", mt: "70px" }}>
      <Box>
        <TableContainer>
          <Table size="medium">
            <ListTableHead
              headLabel={TABLE_HEAD}
              sx={{ backgroundColor: "#e1f0ff" }}
            />
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

export default CollectionListBoard;
