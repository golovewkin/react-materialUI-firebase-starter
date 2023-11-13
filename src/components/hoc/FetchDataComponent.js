import React from "react";
import { useQuery } from "react-query";
import Loader from "../utils/Loader";
import { commonConst } from "../../constants/commonConst";

const FetchDataComponent = ({ getData, queryKey, render }) => {
  const query = useQuery(queryKey, getData);
  if (query.isFetching) {
    return <Loader />;
  }

  if (query.isError) {
    return <span>{commonConst.error}</span>;
  }

  return render(query.data);
};

export default FetchDataComponent;
