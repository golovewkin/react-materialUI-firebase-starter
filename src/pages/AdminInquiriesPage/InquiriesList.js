import React from "react";
import withDataFetch from "../../components/hocs/withDataFetch";

const InquiriesList = ({ data }) => {
  return (
    <>
      TODO show if this email exists already for admin show button create a user
      confirmation popup show link to login after this and save it to the db?
      What is your email ask
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
