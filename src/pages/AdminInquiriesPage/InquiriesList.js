import React, { useCallback, useState } from "react";
import withDataFetch from "../../components/hocs/withDataFetch";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import InquiriesColumns from "./InquiriesColumns";
import { useShowError } from "../../providers/ShowErrorProvider";
import { LogService } from "../../services/LogService";
import { InquiryModel } from "../../models/InquiryModel";
import { useSnack } from "../../providers/SnackProvider";
import ConfirmationPopup from "../../components/popups/ConfirmationPopup";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";
import TCell from "../../components/library-based-components/table/TCell";

const InquiriesList = ({ data }) => {
  const [state, setState] = useState(data);
  const [confirm, setConfirm] = React.useState({ open: false, id: "" });
  const showError = useShowError();
  const showSnack = useSnack();

  // TODO useSubmit
  const removeElement = useCallback(
    (itemId) => {
      const doRemoveElement = async (itemId) => {
        try {
          setState((oldState) => {
            return oldState.filter(({ id }) => id !== itemId);
          });
          showSnack("Done!");

          await InquiryModel.deleteEntity(itemId);
        } catch (e) {
          LogService.log(
            "remove element error, please refresh the page",
            e,
            showError,
          );
        }
      };

      doRemoveElement(itemId);
    },
    [showError, showSnack],
  );

  const onRemove = useCallback((itemId) => {
    setConfirm({ open: true, id: itemId });
  }, []);

  const rows = data.map((item) => {
    return {
      id: item.id,
      components: [
        <TCell key={item.id + 1}>{item.email}</TCell>,
        <TCell key={item.id + 2}>{item.message}</TCell>,
        <TCell key={item.id + 3}>{item.link}</TCell>,
        <TCell key={item.id + 4}>
          <DeleteIconComponent onClick={() => onRemove(item.id)} />
        </TCell>,
      ],
    };
  });

  return (
    <>
      <ConfirmationPopup
        open={confirm.open}
        onClose={() => setConfirm({ open: false, id: "" })}
        onSuccess={() => {
          removeElement(confirm.id);
          setConfirm({ open: false, id: "" });
        }}
      />
      TODO show if this email exists already for admin show button create a user
      confirmation popup show link to login after this and save it to the db?
      What is your email ask
      <h4>Requests</h4>
      <TableContainerComponent rows={rows} columns={<InquiriesColumns />} />
    </>
  );
};

export default withDataFetch(InquiriesList);
