import React from "react";
import { COMMON } from "../../constants/COMMON";
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";
import EmptyCircleIconComponent from "../../components/library-based-components/icons/EmptyCircleIconComponent";
import CircleIconComponent from "../../components/library-based-components/icons/CircleIconComponent";

const InquiryStatusCell = ({ item, approveRequest }) => {
  const status = item.status;
  return (
    <div>
      {status === INQUIRY_STATUSES.CREATED && (
        <>
          <EmptyCircleIconComponent onClick={approveRequest} />
        </>
      )}
      {status === INQUIRY_STATUSES.APPROVED && <CircleIconComponent disabled />}
      {status ?? COMMON.NA}{" "}
      {status === INQUIRY_STATUSES.CREATED && <span>(click to approve)</span>}
    </div>
  );
};

export default InquiryStatusCell;
