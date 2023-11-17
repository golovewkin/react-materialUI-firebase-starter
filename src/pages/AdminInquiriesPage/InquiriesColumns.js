import React from "react";
import TCell from "../../components/library-based-components/table/TCell";
import { makeId } from "../../helpers/util.helper";

const InquiriesColumns = () => {
  return [
    <TCell key={makeId()}>Email</TCell>,
    <TCell key={makeId()}>Message</TCell>,
    <TCell key={makeId()}>Status</TCell>,
    <TCell key={makeId()}>Link to page</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
  ];
};

export default InquiriesColumns;
