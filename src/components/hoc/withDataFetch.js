import React from "react";
import { useQuery } from "@tanstack/react-query";

const withDataFetch = (Component) => (props) => {
  const { getData, queryKey } = props;

  const query = useQuery({ queryKey: [queryKey], queryFn: getData });

  if (query.isError) {
    return <div>{query.error.toString()}</div>;
  }

  if (query.isFetching) {
    return <div>Loading...</div>;
  }

  if (!query.data || !query.data.length) {
    return <div>Data is empty.</div>;
  }

  return <Component {...props} data={query.data} />;
};

export default withDataFetch;
