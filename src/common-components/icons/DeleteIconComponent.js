import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";

const DeleteIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteIconComponent;
