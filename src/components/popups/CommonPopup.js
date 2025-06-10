import React from "react";
import ButtonComponent from "../library-based-components/ButtonComponent/ButtonComponent.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const CommonPopup = ({ open, onClose, title, content, footer, showOk }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{title ?? "Something went wrong..."}</DialogTitle>
        <DialogContent>
          <section style={{ wordBreak: "break-all" }}>{content}</section>
        </DialogContent>
        <DialogActions>
          {footer}
          {showOk && <ButtonComponent onClick={onClose}>ok</ButtonComponent>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommonPopup;
