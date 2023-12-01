import * as React from "react";

export const getDateForPicker = (dateToTransform) => {
  const date = new Date(dateToTransform);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const dateFromPickerToTimestamp = (dateString) => {
  // this "\n" resolves 1 day difference bug.
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // This is very strange but it works....
  return Date.parse(dateString + "\n");
};

const DatePickerComponent = ({ label, value, onChange, error }) => {
  return (
    <div style={{ marginTop: 10, display: "flex", flexDirection: "column" }}>
      <label htmlFor={label} style={error ? { color: "tomato" } : {}}>
        {label + " "}
      </label>
      <input
        style={error ? { color: "tomato" } : {}}
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
    </div>
  );
};

export default DatePickerComponent;
