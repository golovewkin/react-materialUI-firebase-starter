import * as React from "react";
import {
  dateFromPickerToTimestamp,
  getDateForPicker,
} from "../../helpers/time.helper";

const DatePickerComponent = ({ label, value, onChange }) => {
  return (
    <>
      <label htmlFor={label}>{label}:</label>

      <input
        type="date"
        id={label}
        name={label + "name"}
        value={getDateForPicker(value)}
        onChange={(e) => onChange(dateFromPickerToTimestamp(e.target.value))}
      />
    </>
  );
};

export default DatePickerComponent;
