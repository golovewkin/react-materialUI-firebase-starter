import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableContainerComponent = ({ rows, columns, className = "" }) => {
  return (
    <TableContainer className={className}>
      <Table sx={{ minWidth: 650 }} aria-label="data table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.component}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.components.map((component) => (
                <TableCell component="th" scope="row" key={component.id}>
                  {component.markUp}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContainerComponent;
