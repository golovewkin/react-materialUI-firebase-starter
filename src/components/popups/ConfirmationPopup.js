import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VButton from "../../material/VButton/VButton";
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
          <VButton onClick={onClose}>Cancel</VButton>
          <VButton
            onClick={() => {
              onSuccess();
              onClose();
            }}
          >
            Ok
          </VButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmationPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default withErrorBoundary(ConfirmationPopup);
