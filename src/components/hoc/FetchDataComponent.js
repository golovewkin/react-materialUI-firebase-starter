import React from "react";
import Loader from "../utils/Loader";
import { commonConst } from "../../constants/commonConst";
import { useQuery } from "@tanstack/react-query";
import { withErrorBoundary } from "./withErrorBoundary";

const FetchDataComponent = ({ getData, queryKey, render }) => {
  const query = useQuery({ queryKey: [queryKey], queryFn: getData });

  if (query.isError) {
    return (
      <div>
        {commonConst.error}
        <div>{query.error.toString()}</div>
      </div>
    );
  }

  if (query.isFetching) {
    return <Loader />;
  }

  return render(query.data);
};

export default withErrorBoundary(FetchDataComponent);
