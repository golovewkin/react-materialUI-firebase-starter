import React from "react";
import ButtonComponent from "../library-based-components/Button/ButtonComponent";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ErrorPopup = ({ open, setOpen, title, message }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{title ?? "Something went wrong..."}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{ wordBreak: "break-all" }}>{message}</p>
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
