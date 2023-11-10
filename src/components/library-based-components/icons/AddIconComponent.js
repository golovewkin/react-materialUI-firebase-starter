import React from "react";
import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <AddIcon />
    </IconButton>
  );
};

export default AddIconComponent;
