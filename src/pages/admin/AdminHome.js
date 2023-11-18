import React, { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import withDataFetch from "../../components/hocs/withDataFetch";
import { clone } from "../../helpers/util.helper";
import { useShowConfirm } from "../../providers/ShowConfirmProvider";
import useSubmit from "../../components/hooks/useSubmit";
import { InquiryModel } from "../../models/InquiryModel";
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";
import { UserModel } from "../../models/UserModel";
import TCell from "../../components/library-based-components/table/TCell";
import InquiryStatusCell from "../AdminInquiriesPage/InquiryStatusCell";
import { USER_URLS } from "../../constants/USER_URLS";
import ContentCopyIconComponent from "../../components/library-based-components/icons/ContentCopyIconComponent";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import InquiriesColumns from "../AdminInquiriesPage/InquiriesColumns";

export const AdminHome = ({ data }) => {
  const [state, setState] = useState(clone(data));
  const showConfirm = useShowConfirm();

  // const { submit: removeItem } = useSubmit({
  //   sendRequest: async (itemId) => {
  //     setState((oldState) => {
  //       return oldState.filter(({ id }) => id !== itemId);
  //     });
  //     await InquiryModel.deleteEntity(itemId);
  //   },
  // });
  //
  // const rows = state.map((item) => {
  //   return {
  //     id: item.id,
  //     components: [
  //       <TCell key={item.id + 1}>{item.email}</TCell>,
  //       <TCell key={item.id + 2}>{item.message}</TCell>,
  //       <TCell key={item.id + 3}>
  //         <InquiryStatusCell
  //           item={item}
  //           approveRequest={() => approveRequest(item)}
  //           createUser={() => createUser(item)}
  //         />
  //       </TCell>,
  //       <TCell key={item.id + 4}>
  //         {`${URLS.INQUIRY}/${item.id}`}
  //         <ContentCopyIconComponent copy={`${URLS.INQUIRY}/${item.id}`} />
  //       </TCell>,
  //       <TCell key={item.id + 5}>
  //         <DeleteIconComponent
  //           onClick={() => showConfirm(() => removeItem(item.id))}
  //         />
  //       </TCell>,
  //     ],
  //   };
  // });

  return (
    <>
      <h3>
        {/*Hello, {auth.user.name}, this is your Home page*/}
        {/*<HomeIconComponent />*/}
      </h3>
      <h4>Users list</h4>
      <TableContainerComponent rows={[]} columns={<InquiriesColumns />} />
    </>
  );
};

export default withDataFetch(AdminHome);
