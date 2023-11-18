import React from "react";
import ButtonComponent from "../library-based-components/ButtonComponent/ButtonComponent";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const MessagePopup = ({ open, setOpen, title, message }) => {
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
            <span style={{ wordBreak: "break-all" }}>{message}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={() => setOpen(false)}>ok</ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MessagePopup;
