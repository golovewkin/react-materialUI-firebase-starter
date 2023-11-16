import React from "react";
import withDataFetch from "../../components/hoc/withDataFetch";

const InquiriesList = ({ data }) => {
  return (
    <>
      TODO show if this email exists already for admin show button create a user
      <h4>Requests</h4>
      <ul>
        {data.map((request) => (
          <li key={request.id}>Email: {request.email}</li>
        ))}
      </ul>
    </>
  );
};

export default withDataFetch(InquiriesList);
