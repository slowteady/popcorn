import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import {
  ListTableHeadLabelProps,
  ListTableHeadProps,
} from "../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// 테이블 헤더
// ----------------------------------------------------------------------

const ListTableHead = ({
  headLabel,
}: ListTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headLabel.map((headCell: ListTableHeadLabelProps) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "center"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListTableHead;
