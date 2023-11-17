import React, { useState } from "react";
import withDataFetch from "../../components/hocs/withDataFetch";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import InquiriesColumns from "./InquiriesColumns";
import { InquiryModel } from "../../models/InquiryModel";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";
import TCell from "../../components/library-based-components/table/TCell";
import { useShowConfirm } from "../../providers/ShowConfirmProvider";
import { clone } from "../../helpers/util.helper";
import useSubmit from "../../components/hooks/useSubmit";
import InquiryStatusCell from "./InquiryStatusCell";
import { URLS } from "../../constants/URLS";
import ContentCopyIconComponent from "../../components/library-based-components/icons/ContentCopyIconComponent";

const InquiriesList = ({ data }) => {
  const [state, setState] = useState(clone(data));
  const showConfirm = useShowConfirm();

  // TODO remove element fix
  const { submit: removeElement } = useSubmit({
    sendRequest: async (itemId) => {
      setState((oldState) => {
        return oldState.filter(({ id }) => id !== itemId);
      });
      await InquiryModel.deleteEntity(itemId);
    },
  });

  const { submit: approveRequest } = useSubmit({
    sendRequest: async (itemId) => {
      setState((oldState) => {
        return oldState.filter(({ id }) => id !== itemId);
      });
    },
  });

  const rows = state.map((item) => {
    return {
      id: item.id,
      components: [
        <TCell key={item.id + 1}>{item.email}</TCell>,
        <TCell key={item.id + 2}>{item.message}</TCell>,
        <TCell key={item.id + 3}>
          <InquiryStatusCell
            status={item.status}
            onClick={() => approveRequest(item.id)}
          />
        </TCell>,
        <TCell key={item.id + 4}>
          {`${URLS.INQUIRIES}/${item.id}`}
          <ContentCopyIconComponent copy={`${URLS.INQUIRIES}/${item.id}`} />
        </TCell>,
        <TCell key={item.id + 5}>
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
