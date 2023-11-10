import React from "react";
import ButtonComponent from "../library-based-components/Button/ButtonComponent";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmationPopup = ({ open, onClose, onSuccess }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={onClose}>Cancel</ButtonComponent>
          <ButtonComponent
            onClick={() => {
              onSuccess();
              onClose();
            }}
          >
            Ok
          </ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationPopup;
