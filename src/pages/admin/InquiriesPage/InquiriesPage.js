import React from "react";
import { DBService } from "../../../services/DBService";
import { COLLECTIONS } from "../../../constants/COLLECTIONS";
import InquiriesList from "./InquiriesList";

const InquiriesPage = ({ data }) => {
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.INQUIRIES);
  }, []);

  return <InquiriesList getData={getData} queryKey="admin-get-inquiries" />;
};

export default InquiriesPage;
