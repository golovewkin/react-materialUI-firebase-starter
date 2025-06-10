import React from "react";
import TCell from "../../../components/library-based-components/table/TCell.js";
import { makeId } from "../../../helpers/util.helper.js";

const InquiriesColumns = () => {
  return [
    <TCell key={makeId()}>Email</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
    <TCell key={makeId()}>Type</TCell>,
    <TCell key={makeId()}>Link</TCell>,
  ];
};

export default InquiriesColumns;
