import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../utils/Loader";
import { COMMON } from "../../constants/COMMON";

const withDataFetch = (Component) => (props) => {
  const { getData, queryKey } = props;
  if (!getData) {
    throw new Error("no getData function");
  }
  const query = useQuery({ queryKey: [queryKey], queryFn: getData });

  if (query.isError) {
    return (
      <>
        <div>{COMMON.ERROR}</div>
        <div>{query.error.toString()}</div>
      </>
    );
  }

  if (query.isFetching) {
    return <Loader />;
  }

  if (!query.data) {
    return <div>Data is empty.</div>;
  }

  return <Component {...props} data={query.data} />;
};

export default withDataFetch;
