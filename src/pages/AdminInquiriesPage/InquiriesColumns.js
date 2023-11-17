import { makeId } from "../../helpers/util.helper";
import React from "react";
import TCell from "../../components/library-based-components/table/TCell";

const InquiriesColumns = () => {
  return [
    <TCell key={makeId()}>Email</TCell>,
    <TCell key={makeId()}>Message</TCell>,
    <TCell key={makeId()}>Link</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
  ];
};

export default InquiriesColumns;
