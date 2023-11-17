import React, { useCallback, useState } from "react";
import withDataFetch from "../../components/hocs/withDataFetch";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import InquiriesColumns from "./InquiriesColumns";
import { useShowError } from "../../providers/ShowErrorProvider";
import { InquiryModel } from "../../models/InquiryModel";
import { useSnack } from "../../providers/SnackProvider";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";
import TCell from "../../components/library-based-components/table/TCell";
import { useShowConfirm } from "../../providers/ShowConfirmProvider";
import { clone } from "../../helpers/util.helper";
import useSubmit from "../../components/hooks/useSubmit";
import { BrowserStorageService } from "../../services/BrowserStorageService";
import { COMMON } from "../../constants/COMMON";

const InquiriesList = ({ data }) => {
  const [state, setState] = useState(clone(data));
  const showError = useShowError();
  const showSnack = useSnack();
  const showConfirm = useShowConfirm();

  // TODO useSubmit
  const removeElement = useCallback(
    (itemId) => {
      const doRemoveElement = async (itemId) => {
        debugger;
        setState((oldState) => {
          return oldState.filter(({ id }) => id !== itemId);
        });

        // await InquiryModel.deleteEntity(itemId);
      };

      doRemoveElement(itemId);
    },
    [showError, showSnack],
  );

  //   const { loading, submit } = useSubmit({
  //   sendRequest: async () => {
  //     const previousRequest = BrowserStorageService.getData(
  //       COMMON.REQUEST_SENT,
  //     );
  //     if (previousRequest) {
  //       throw new Error("Request was already sent!");
  //     }
  //     await InquiryModel.create(state);
  //     BrowserStorageService.setData(COMMON.REQUEST_SENT, "sent");
  //   },
  //   successMessage: "Request was sent! Please wait till admin accepts 🤗",
  // });

  const rows = state.map((item) => {
    return {
      id: item.id,
      components: [
        <TCell key={item.id + 1}>{item.email}</TCell>,
        <TCell key={item.id + 2}>{item.message}</TCell>,
        <TCell key={item.id + 3}>{item.link}</TCell>,
        <TCell key={item.id + 4}>
          <DeleteIconComponent
            onClick={() => showConfirm(() => removeElement(item.id))}
          />
        </TCell>,
      ],
    };
  });

  return (
    <>
      TODO show if this email exists already for admin show button create a user
      confirmation popup show link to login after this and save it to the db?
      What is your email ask
      <h4>Requests</h4>
      <TableContainerComponent rows={rows} columns={<InquiriesColumns />} />
    </>
  );
};

export default withDataFetch(InquiriesList);
