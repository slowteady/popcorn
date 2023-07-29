import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import {
  ListTableHeadLabelProps,
  ListTableHeadProps,
} from "../../../types/state/movies/movieTypes";

// ----------------------------------------------------------------------
// 테이블 헤더 컴포넌트
// ----------------------------------------------------------------------

const ListTableHead = ({ headLabel, isColList, sx }: ListTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {!isColList && <TableCell sx={sx} />}
        {headLabel.map((headCell: ListTableHeadLabelProps) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "center"}
            sx={sx}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListTableHead;
