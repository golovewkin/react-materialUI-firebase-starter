import React from "react";
import { DBService } from "../../../services/DBService";
import { COLLECTIONS } from "../../../constants/COLLECTIONS";
import InquiriesList from "./InquiriesList";
import { InquiryModel } from "../../../models/InquiryModel";

const InquiriesPage = ({ data }) => {
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.INQUIRIES);
  }, []);

  return (
    <InquiriesList
      getData={getData}
      queryKey="admin-get-inquiries"
      cb={(model) => new InquiryModel(model)}
    />
  );
};

export default InquiriesPage;
