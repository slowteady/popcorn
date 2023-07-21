import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
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
  rowCount,
  numSelected,
  onSelectAllClick,
}: ListTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
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
