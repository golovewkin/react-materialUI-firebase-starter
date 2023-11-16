import React from "react";
import withDataFetch from "../../components/hoc/withDataFetch";

const InquiriesList = ({ data }) => {
  return (
    <>
      <h4>Invites</h4>
      <ul>
        {data.map((invite) => (
          <li key={invite.id}>Email: {invite.email}</li>
        ))}
      </ul>
    </>
  );
};

export default withDataFetch(InquiriesList);
