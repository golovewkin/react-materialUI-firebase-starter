import React from "react";
import { COMMON } from "../../constants/COMMON";
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";
import EmptyCircleIconComponent from "../../components/library-based-components/icons/EmptyCircleIconComponent";
import CircleIconComponent from "../../components/library-based-components/icons/CircleIconComponent";
import VerifiedIconComponent from "../../components/library-based-components/icons/VerifiedIconComponent";
import DoneIconComponent from "../../components/library-based-components/icons/DoneIconComponent";

const InquiryStatusCell = ({ item, approveRequest, createUser }) => {
  const status = item.status;
  return (
    <div>
      {status === INQUIRY_STATUSES.CREATED && (
        <EmptyCircleIconComponent onClick={approveRequest} />
      )}
      {status === INQUIRY_STATUSES.APPROVED && <CircleIconComponent disabled />}
      {status === INQUIRY_STATUSES.TAKEN && (
        <VerifiedIconComponent onClick={createUser} />
      )}
      {status === INQUIRY_STATUSES.USER_CREATED && (
        <DoneIconComponent disabled style={{ color: "green" }} />
      )}
      {status ?? COMMON.NA}
    </div>
  );
};

export default InquiryStatusCell;
