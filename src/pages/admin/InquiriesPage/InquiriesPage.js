import React from "react";
import { DBService } from "../../../services/DBService.js";
import { COLLECTIONS } from "../../../constants/COLLECTIONS.js";
import InquiriesList from "./InquiriesList.js";
import { InquiryModel } from "../../../models/InquiryModel.js";

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
