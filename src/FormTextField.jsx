import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const FormTextField = ({ label, onChange, ...props }) => {
  const [field, meta] = useField(props);

  field.onChange = (e) => {
    onChange(e);
  };

  return (
    <TextField
      fullWidth
      id={`formTextField-${props.name}`}
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default FormTextField;
