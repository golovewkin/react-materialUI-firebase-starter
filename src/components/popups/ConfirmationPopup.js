import React from "react";
import ButtonComponent from "../library-based-components/ButtonComponent/ButtonComponent.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmationPopup = ({
  open,
  onClose,
  onSuccess,
  message = "Are you 100% Sure?",
}) => {
  return (
    <div style={{ minWidth: 300 }}>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          This action needs confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={onClose}>Cancel</ButtonComponent>
          <ButtonComponent onClick={onSuccess}>Ok</ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationPopup;
