import React, { useContext, useState, useEffect, createContext } from "react";
import { LogService } from "../services/LogService";
import { commonConst } from "../constants/commonConst";
import Loader from "../components/utils/Loader";

const APIContext = createContext(null);

export function APIContextProvider({ children, url }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        setLoader(true);
        //TODO get data
        const serverData = null;
        setData(serverData);
      } catch (e) {
        LogService.log("fetchData error", e);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);
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
