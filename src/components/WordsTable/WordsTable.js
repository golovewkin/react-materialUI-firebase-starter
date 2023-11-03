import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import VCheckBox from "../../material/VCheckBox";
import VVolumeIcon from "../../material/icons/VVolumeIcon";
import { commonConst } from "../../constants/commonConst";
import VDeleteIcon from "../../material/icons/VDeleteIcon";

const WordsTable = ({ words, showEditWordPopup, askAboutDeletion }) => {
  return (
    <>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={"medium"} aria-label="table">
          <TableBody>
            {words.map((word) => (
              <TableRow
                hover
                role="checkbox"
                // aria-checked={"isItemSelected"}
                tabIndex={-1}
                key={word.id}
                selected={false}
              >
                <TableCell padding="checkbox">
                  <VCheckBox onChange={() => {}} />
                </TableCell>
                <TableCell padding="checkbox">
                  <VVolumeIcon />
                </TableCell>
                <TableCell>
                  <img
                    className="WordsTable__pic"
                    src={word.pic || commonConst.noPicUser}
                    alt=""
                  />
                </TableCell>
                <TableCell
                  className="clickable"
                  align="left"
                  onClick={() => showEditWordPopup(word)}
                >
                  <div className="WordsTable__word">{word.word}</div>
                  <div>{word.translation}</div>
                </TableCell>
                <TableCell align="left">group</TableCell>
                <TableCell align="left">status</TableCell>
                <TableCell align="left">
                  <VDeleteIcon onClick={() => askAboutDeletion(word)} />
                </TableCell>
              </TableRow>
            ))}
            {/*{emptyRows > 0 && (*/}
            {/*  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>*/}
            {/*    <TableCell colSpan={6} />*/}
            {/*  </TableRow>*/}
            {/*)}*/}
          </TableBody>
        </Table>
      </TableContainer>
      {/*<TablePagination*/}
      {/*  rowsPerPageOptions={[5, 10, 25]}*/}
      {/*  component="div"*/}
      {/*  count={2}*/}
      {/*  rowsPerPage={'rowsPerPage'}*/}
      {/*  page={2}*/}
      {/*  onChangePage={handleChangePage}*/}
      {/*  onChangeRowsPerPage={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </>
  );
};

WordsTable.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordsTable;
