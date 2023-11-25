import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const AutocompleteComponent = ({
  options,
  onChange,
  style = {},
  value = "",
  label = "Search",
}) => {
  const currentValue = options.find((item) => item.id === value);

  return (
    <Autocomplete
      id="AutocompleteComponent"
      value={currentValue || null}
      onChange={(e, option) => onChange(option?.id ?? "")}
      options={options}
      // isOptionEqualToValue={(option, value) => option._id === currentValue?._id}
      getOptionLabel={(option) => option.label || ""}
      style={{ width: "100%", ...style }}
      renderInput={(params) => (
        <TextField variant="standard" {...params} label={label} />
      )}
    />
  );
};

export default AutocompleteComponent;
