import React, { ChangeEvent, FunctionComponent, memo } from "react";
import { TextField, TextFieldProps } from "@mui/material";

type InputProps = {
  onChange: (value: string) => void;
  value: string;
}  & TextFieldProps

const Input: FunctionComponent<InputProps> = ({
  onChange,
  value,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <TextField {...props} value={value} onChange={handleChange} />;
};

export default memo(Input);
