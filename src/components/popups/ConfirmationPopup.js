import React from "react";
import ButtonComponent from "../library-based-components/ButtonComponent/ButtonComponent";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmationPopup = ({ open, onClose, onSuccess }) => {
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
            Are you 100% Sure?
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
