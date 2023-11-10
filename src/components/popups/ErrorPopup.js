import React from "react";
import ButtonComponent from "../library-based-components/Button/ButtonComponent";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ErrorPopup = ({ open, setOpen, message }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Something went wrong...
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={() => setOpen(false)}>ok</ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ErrorPopup;
