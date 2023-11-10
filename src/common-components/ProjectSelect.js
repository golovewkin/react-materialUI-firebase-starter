import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ProjectSelect = ({ onChange, value, values }) => {
  return (
    <FormControl style={{ marginTop: 15 }}>
      <InputLabel id="VSelect">Group</InputLabel>
      <Select
        labelId="VSelect"
        id="VSelect-select"
        value={value}
        error={!value}
        onChange={(e) => onChange(e.target.value)}
      >
        {values.map((value) => (
          <MenuItem key={value.id} value={value.id}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

ProjectSelect.propTypes = {
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProjectSelect;
