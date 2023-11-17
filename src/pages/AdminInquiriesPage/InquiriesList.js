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
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";

const InquiriesList = ({ data }) => {
  const [state, setState] = useState(clone(data));
  const showConfirm = useShowConfirm();

  const { submit: removeItem } = useSubmit({
    sendRequest: async (itemId) => {
      setState((oldState) => {
        return oldState.filter(({ id }) => id !== itemId);
      });
      await InquiryModel.deleteEntity(itemId);
    },
  });

  const { submit: approveRequest } = useSubmit({
    sendRequest: async (inquiryItem) => {
      const newStatus = INQUIRY_STATUSES.APPROVED;
      setState((oldState) => {
        return oldState.map((item) => {
          if (item.id === inquiryItem.id) {
            return { ...item, status: newStatus };
          }
          return item;
        });
      });

      const inquiry = new InquiryModel(inquiryItem);
      inquiry.setStatus(newStatus);
      await inquiry.update();
    },
  });

  const rows = state.map((item) => {
    return {
      id: item.id,
      components: [
        <TCell key={item.id + 1}>{item.email}</TCell>,
        <TCell key={item.id + 2}>{item.message}</TCell>,
        <TCell key={item.id + 3}>
          <InquiryStatusCell item={item} onClick={() => approveRequest(item)} />
        </TCell>,
        <TCell key={item.id + 4}>
          {`${URLS.INQUIRY}/${item.id}`}
          <ContentCopyIconComponent copy={`${URLS.INQUIRY}/${item.id}`} />
        </TCell>,
        <TCell key={item.id + 5}>
          <DeleteIconComponent
            onClick={() => showConfirm(() => removeItem(item.id))}
          />
        </TCell>,
      ],
    };
  });

  return (
    <>
      <h4>Requests</h4>
      <TableContainerComponent rows={rows} columns={<InquiriesColumns />} />
    </>
  );
};

export default withDataFetch(InquiriesList);
