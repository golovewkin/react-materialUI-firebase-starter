import React from "react";
import { INQUIRY_STATUSES } from "../../../constants/INQUIRY";
import EmptyCircleIconComponent from "../../../components/library-based-components/icons/EmptyCircleIconComponent";
import CircleIconComponent from "../../../components/library-based-components/icons/CircleIconComponent";
import DeleteIconComponent from "../../../components/library-based-components/icons/DeleteIconComponent";
import { useShowConfirm } from "../../../providers/ShowConfirmProvider";

const InquiryStatusCell = ({ item, doneRequest, removeRequest }) => {
  const showConfirm = useShowConfirm();

  const status = item.status;
  return (
    <div>
      {status === INQUIRY_STATUSES.CREATED && (
        <>
          <EmptyCircleIconComponent onClick={() => showConfirm(doneRequest)} />
        </>
      )}
      {status === INQUIRY_STATUSES.DONE && (
        <>
          <CircleIconComponent disabled />
        </>
      )}
      <DeleteIconComponent
        onClick={() =>
          showConfirm(removeRequest, "Are you sure you want to remove this?")
        }
      />
    </div>
  );
};

export default InquiryStatusCell;
