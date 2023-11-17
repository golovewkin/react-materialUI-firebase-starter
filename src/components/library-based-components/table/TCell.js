import React from "react";
import { TableCell } from "@mui/material";

const TCell = ({ children, key }) => {
  return (
    <TableCell component="th" scope="row" key={key}>
      {children}
    </TableCell>
  );
};

export default TCell;
