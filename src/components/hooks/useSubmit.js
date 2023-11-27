import React, { useState } from "react";
import { LogService } from "../../services/LogService";
// import { useShowMessage } from "../../providers/ShowCommonPopupProvider";
import { useSnack } from "../../providers/SnackProvider";
import { useShowCommonPopup } from "../../providers/ShowCommonPopupProvider";

const useSubmit = ({
  sendRequest,
  successMessage = "Success!",
  noMessage = false,
}) => {
  const showError = useShowCommonPopup();
  const showShack = useSnack();
  const [loading, setLoading] = useState(false);

  const submit = React.useCallback(
    async (params) => {
      try {
        setLoading(true);
        await sendRequest(params);
        if (!noMessage) {
          showShack(successMessage);
        }
      } catch (e) {
        LogService.log("Send request error", e, showError);
      } finally {
        setLoading(false);
      }
    },
    [showShack, showError, setLoading, sendRequest, successMessage, noMessage],
  );

  return { loading, submit };
};

export default useSubmit;
