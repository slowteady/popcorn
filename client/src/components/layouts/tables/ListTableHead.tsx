import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import {
  ListTableHeadLabelProps,
  ListTableHeadProps,
} from "../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// 테이블 헤더
// ----------------------------------------------------------------------

const ListTableHead = ({ headLabel, sx }: ListTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={sx} />
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
