import React, { useState } from "react";
import { LogService } from "../../services/LogService";
import { useShowCommonPopup } from "../../providers/ShowCommonPopupProvider";

const useSubmit = ({ sendRequest }) => {
  const showError = useShowCommonPopup();
  const [loading, setLoading] = useState(false);

  const submit = React.useCallback(
    async (params) => {
      try {
        setLoading(true);
        await sendRequest(params);
      } catch (e) {
        LogService.log("Send request error", e, showError);
      } finally {
        setLoading(false);
      }
    },
    [showError, setLoading, sendRequest],
  );

  return { loading, submit };
};

export default useSubmit;
