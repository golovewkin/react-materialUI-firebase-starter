import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";

const SelectComponent = ({ onChange, value, values, label, id, isError }) => {
  return (
    <FormControl fullWidth style={{ marginTop: 15 }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        error={isError(value)}
        labelId={id}
        id="simple-select"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {values.map((value) => (
          <MenuItem key={value.id} value={value.id}>
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
