import * as React from "react";
import {
  dateFromPickerToTimestamp,
  getDateForPicker,
} from "../../helpers/time.helper";

export const dateFromPickerToTimestamp = (dateString) => {
  // this "\n" resolves 1 day difference bug.
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // This is very strange but it works....
  return Date.parse(dateString + "\n");
};

const DatePickerComponent = ({ label, value, onChange }) => {
  return (
    <>
      <label htmlFor={label}>{label}:</label>

      <input
        type="date"
        id={label}
        name={label + "name"}
        value={getDateForPicker(value)}
        onChange={(e) => {
          const value = e.target.value;
          if (!Number.isNaN(value) && value != null) {
            onChange(dateFromPickerToTimestamp(value));
          }
        }}
      />
    </>
  );
};

export default DatePickerComponent;
