import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonComponent from "../library-based-components/Button/ButtonComponent";
import { withErrorBoundary } from "../hoc/withErrorBoundary/withErrorBoundary";

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

export default withErrorBoundary(ConfirmationPopup);
