import React from "react";
import { COMMON } from "../../constants/COMMON";

const InquiryStatusCell = ({ status, onClick }) => {
  return <div onClick={onClick}>{status ?? COMMON.NA}</div>;
};

export default InquiryStatusCell;
