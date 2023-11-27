import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: 50 }}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
