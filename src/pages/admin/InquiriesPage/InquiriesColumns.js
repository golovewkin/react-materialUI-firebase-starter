import React from "react";
import TCell from "../../../components/library-based-components/table/TCell";
import { makeId } from "../../../helpers/util.helper";

const InquiriesColumns = () => {
  return [
    <TCell key={makeId()}>Email</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
    <TCell key={makeId()}>Type</TCell>,
    <TCell key={makeId()}>Link</TCell>,
  ];
};

export default InquiriesColumns;
