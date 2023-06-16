import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { updateProfile } from "../../services/userService";
import { mock } from "../../state/_mock/mock";
import { ProfileFormProps } from "../../types/users/userTypes";

// ----------------------------------------------------------------------
// 프로파일 폼 처리
// ----------------------------------------------------------------------

const ProfileForm = ({ avatarImg }: ProfileFormProps) => {
  const [selfIntro, setSelfIntro] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { selfIntro, avatarImg };
    const updateResult = await updateProfile(data);
  };
  return (
    <>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography color="black" fontSize={18}>
          {mock.displayName}
        </Typography>
        <Typography color="black" fontSize={18}>
          {mock.email}
        </Typography>
        <TextField
          label="자기소개"
          value={selfIntro}
          onChange={(e) => setSelfIntro(e.target.value)}
          inputProps={{ maxLength: 100 }}
          multiline
          rows={5}
          sx={{ mt: 2, width: "100%" }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          저장
        </Button>
      </Box>
    </>
  );
};

export default ProfileForm;