import React, { useContext, useState, useEffect, createContext } from "react";
import { LogService } from "../services/LogService";
import { commonConst } from "../constants/commonConst";
import Loader from "../components/utils/Loader";
import { DataBaseService } from "../services/DataBaseService";
import { useLogError } from "./LogErrorProvider";

const APIContext = createContext(null);

export function APIProvider({ children, command, collection }) {
  const showError = useLogError();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setLoader(true);
        const serverData = await DataBaseService[command](collection);
        setData(serverData);
      } catch (e) {
        LogService.log("fetchData error", e);
        setError(true);
        showError("fetchData error", e);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [collection, command, showError]);
  console.log(data);
  return (
    <APIContext.Provider
      value={{
        data,
      }}
    >
      {error && <span>{commonConst.error}</span>}
      {loader && <Loader />}
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
