import React from "react";
import TextField from "material-ui/TextField";

export const renderField = ({ input, type, label, meta: { touched, error } }) =>
  <TextField
    hintText={label}
    type={type}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
  />;
