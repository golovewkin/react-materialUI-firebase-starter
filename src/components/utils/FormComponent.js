import React from "react";

const FormComponent = ({ children, onSubmit, className = "" }) => {
  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default FormComponent;
