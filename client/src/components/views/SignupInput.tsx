import React, { ChangeEvent, useState } from "react";
import { TextField } from "@mui/material";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupInput = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <TextField
        label="이메일"
        margin="normal"
        autoComplete="email"
        name="email"
        required
        fullWidth
        onChange={onChangeHandler}
        value={formData.email}
      />
      <TextField
        label="이름"
        margin="normal"
        name="name"
        inputProps={{ maxLength: 6 }}
        required
        fullWidth
        onChange={onChangeHandler}
        value={formData.name}
      />
      <TextField
        label="패스워드"
        margin="normal"
        type="password"
        name="password"
        autoComplete="current-password"
        required
        fullWidth
        onChange={onChangeHandler}
        value={formData.password}
      />
      <TextField
        label="패스워드 확인"
        margin="normal"
        type="password"
        name="confirmPassword"
        required
        fullWidth
        onChange={onChangeHandler}
        value={formData.confirmPassword}
      />
    </>
  );
};

export default SignupInput;
