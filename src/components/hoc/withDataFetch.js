import { useQuery } from "@tanstack/react-query";
import { COMMON } from "../../constants/COMMON";
import Loader from "../utils/Loader";
import React, { useCallback } from "react";
import { DBService } from "../../services/DBService";

const withDataFetch = (Component) => (props) => {
  const { fetchCommand, fetchParamCollection, fetchParamId, queryKey } = props;
  const getData = useCallback(() => {
    return DBService[fetchCommand](fetchParamCollection, fetchParamId);
  }, [fetchCommand, fetchParamCollection, fetchParamId]);

  const query = useQuery({ queryKey: [queryKey], queryFn: getData });

  if (query.isError) {
    return (
      <div>
        {COMMON.error}
        <div>{query.error.toString()}</div>
      </div>
    );
  }

  if (query.isFetching) {
    return <Loader />;
  }

  if (!query.data || !query.data.length) {
    return <div>Data is empty.</div>;
  }

  return <Component {...props} data={query.data} />;
};

export default withDataFetch;
