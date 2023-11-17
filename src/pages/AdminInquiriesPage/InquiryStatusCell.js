import React from "react";
import { COMMON } from "../../constants/COMMON";
import { INQUIRY_STATUSES } from "../../constants/INQUIRY_STATUSES";
import EmptyCircleComponent from "../../components/library-based-components/icons/EmptyCircleComponent";
import CircleIconComponent from "../../components/library-based-components/icons/CircleIconComponent";
import VerifiedIconComponent from "../../components/library-based-components/icons/VerifiedIconComponent";

const InquiryStatusCell = ({ status, onClick }) => {
  return (
    <div>
      {status ?? COMMON.NA}{" "}
      {status === INQUIRY_STATUSES.CREATED && (
        <EmptyCircleComponent onClick={onClick} />
      )}
      {status === INQUIRY_STATUSES.APPROVED && <CircleIconComponent />}
      {status === INQUIRY_STATUSES.TAKEN && <VerifiedIconComponent />}
    </div>
  );
};

export default InquiryStatusCell;
