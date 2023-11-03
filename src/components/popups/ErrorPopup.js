import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VButton from "../../material/VButton/VButton";

const ErrorPopup = ({open, setOpen, message}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Something went wrong...</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <VButton onClick={() => setOpen(false)}>
            ok
          </VButton>
        </DialogActions>
      </Dialog>
    </div>
  )
};

ErrorPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorPopup;
