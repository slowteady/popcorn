import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

// ----------------------------------------------------------------------
// 테이블 헤더
// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

const ListTableHead = ({ headLabel }: any) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox />
        </TableCell>
        {headLabel.map((headCell: any) => (
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
