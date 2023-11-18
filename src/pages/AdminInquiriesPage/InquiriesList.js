import React, { useState } from "react";
import withDataFetch from "../../components/hocs/withDataFetch";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import InquiriesColumns from "./InquiriesColumns";
import { InquiryModel } from "../../models/InquiryModel";
import TCell from "../../components/library-based-components/table/TCell";
import { clone, getInviteUrl } from "../../helpers/util.helper";
import useSubmit from "../../components/hooks/useSubmit";
import InquiryStatusCell from "./InquiryStatusCell";
import { INQUIRY_STATUSES, INQUIRY_TYPES } from "../../constants/INQUIRY";
import ContentCopyIconComponent from "../../components/library-based-components/icons/ContentCopyIconComponent";

const InquiriesList = ({ data }) => {
  const [state, setState] = useState(clone(data));

  const { submit: removeRequest } = useSubmit({
    sendRequest: async (itemId) => {
      setState((oldState) => {
        return oldState.filter(({ id }) => id !== itemId);
      });
      await InquiryModel.deleteEntity(itemId);
    },
  });

  const { submit: doneRequest } = useSubmit({
    sendRequest: async (inquiryItem) => {
      const newStatus = INQUIRY_STATUSES.DONE;
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
        <TCell key={item.id + 1}>
          {item.email}{" "}
          <ContentCopyIconComponent
            copy={`node user-create-script.js ${item.email}`}
          />
        </TCell>,
        <TCell key={item.id + 2}>{item.message}</TCell>,
        <TCell key={item.id + 3}>
          <InquiryStatusCell
            item={item}
            doneRequest={() => doneRequest(item)}
            removeRequest={() => removeRequest(item.id)}
          />
        </TCell>,
        <TCell key={item.id + 4}>{item.type}</TCell>,
        <TCell key={item.id + 5}>
          {item.type === INQUIRY_TYPES.INVITE && (
            <>
              {getInviteUrl(item)}
              <ContentCopyIconComponent copy={getInviteUrl(item)} />
            </>
          )}
        </TCell>,
      ],
    };
  });

  return (
    <>
      <h4>Requests and how to deal with it</h4>
      <ol>
        <li>Get user email</li>
        <li>
          Create a user via script (node user-create-script.js user-email)
        </li>
        <li>Mark a request as done</li>
        <li>Send a user's credentials that the script gives you</li>
        <li>Remove a request</li>
      </ol>
      <TableContainerComponent rows={rows} columns={<InquiriesColumns />} />
    </>
  );
};

export default withDataFetch(InquiriesList);
