import React from "react";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClipboardService from "../../../services/ClipboardService";
import { useSnack } from "../../../providers/SnackProvider";

const ContentCopyIconComponent = (props) => {
  const showSnack = useSnack();
  return (
    <IconButton
      {...props}
      onClick={() => {
        ClipboardService.copyToClipboard(props.copy, () =>
          showSnack("copied!"),
        );
      }}
    >
      <ContentCopyIcon />
    </IconButton>
  );
};

export default ContentCopyIconComponent;
