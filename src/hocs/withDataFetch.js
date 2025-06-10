import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/library-based-components/Loader.js";
import { COMMON } from "../constants/COMMON.js";

const withDataFetch = (Component) => (props) => {
  const { getData, queryKey, cb } = props;
  if (!getData) {
    throw new Error("no getData function");
  }
  if (!cb) {
    throw new Error("no cb function");
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

  return <Component {...props} data={query.data.map((item) => cb(item))} />;
};

export default withDataFetch;
