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
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LIST_TABLE_CONF } from "../../../../config/layout/tableConfig";
import { getCollectionData } from "../../../../services/collectionService";
import { collectionDetailData } from "../../../../state/collectionState";
import {
  CollectionData,
  CollectionListObj,
} from "../../../../types/state/collection/collectionTypes";
import ListTableHead from "../../../layouts/tables/ListTableHead";

// ----------------------------------------------------------------------
// 컬렉션 리스트 게시판형 컴포넌트
// ----------------------------------------------------------------------

const { ROWSPERPAGE, TABLE_HEAD } = LIST_TABLE_CONF;

const CollectionMainList = () => {
  const setDetailData = useSetRecoilState(collectionDetailData);
  const [collection, setCollection] = useState<CollectionListObj[]>([]);
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 갯수
  const [page, setPage] = useState(1); // 현재 페이지
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  useQuery(
    ["getCollectionData", page],
    () => getCollectionData(page, ROWSPERPAGE),
    {
      onSuccess: (data: CollectionData) => {
        const collection = data.payload;
        const totalPage = data.totalPages;

        setCollection(collection);
        setTotalPages(totalPage);
      },
      enabled,
    }
  );

  useEffect(() => {
    setEnabled(true);
  }, [page]);

  const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const onTitleClick = (
    e: MouseEvent<HTMLSpanElement>,
    id: string,
    authUserId: string
  ) => {
    const obj = {
      authUserId,
      collectionTitle: e.currentTarget.textContent
        ? e.currentTarget.textContent
        : "",
    };
    setDetailData(obj);

    navigate("/main/collection/detail", { state: { id } });
  };

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
                  const { id, user, collectionTitle, rgstDate } = col;
                  const date = rgstDate.toString().substring(0, 10);

                  return (
                    <TableRow hover key={index} tabIndex={-1} role="row">
                      {collectionTitle && (
                        <TableCell align="center">
                          <Typography
                            onClick={(e) => onTitleClick(e, id, user.userId)}
                            variant="subtitle2"
                            noWrap
                            sx={{ cursor: "pointer" }}
                          >
                            {collectionTitle}
                          </Typography>
                        </TableCell>
                      )}
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
          onChange={onPageChange}
          count={totalPages}
          page={page}
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

export default CollectionMainList;
