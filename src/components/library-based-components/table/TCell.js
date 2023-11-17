import React from "react";
import { TableCell } from "@mui/material";

const TCell = ({ children }) => {
  return (
    <TableCell component="th" scope="row">
      {children}
    </TableCell>
  );
};

export default TCell;
