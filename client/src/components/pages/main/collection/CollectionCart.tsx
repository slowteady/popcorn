import {
  Box,
  Container,
  Table,
  TableBody,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ListTableHead from "../../../layouts/tables/ListTableHead";

// ----------------------------------------------------------------------
// 컬렉션 추가 리스트 카트
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "title", label: "제목", alignRight: false },
  { id: "release_date", label: "릴리즈", alignRight: false },
];

const CollectionCart = () => {
  // submit
  const handleSubmit = () => {};

  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <Box onSubmit={handleSubmit}>
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
          </Table>
        </TableContainer>
        <TableBody>
          
        </TableBody>
      </Box>
    </Container>
  );
};

export default CollectionCart;
