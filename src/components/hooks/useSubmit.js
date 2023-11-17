import React, { useState } from "react";
import { LogService } from "../../services/LogService";
import { useShowError } from "../../providers/ShowErrorProvider";
import { useSnack } from "../../providers/SnackProvider";

const useSubmit = ({ sendRequest, successMessage = "Success!" }) => {
  const showError = useShowError();
  const showShack = useSnack();
  const [loading, setLoading] = useState(false);

  const submit = React.useCallback(
    async (email) => {
      try {
        setLoading(true);
        await sendRequest();
        showShack(successMessage);
      } catch (e) {
        LogService.log("Send request error", e, showError);
      } finally {
        setLoading(false);
      }
    },
    [showShack, showError, setLoading, sendRequest, successMessage],
  );

  return { loading, submit };
};

export default useSubmit;
