import React from "react";
import { useQuery } from "react-query";
import Loader from "../utils/Loader";
import { commonConst } from "../../constants/commonConst";

const FetchDataComponent = ({ getData, queryKey, render }) => {
  const query = useQuery(queryKey, getData);

  if (query.isError) {
    return (
      <div>
        {commonConst.error}
        <div>{query.error}</div>
      </div>
    );
  }

  if (query.isFetching) {
    return <Loader />;
  }

  return render(query.data);
};

export default FetchDataComponent;
