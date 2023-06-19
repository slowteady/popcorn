import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { updateProfile } from "../../services/userService";
import { mock } from "../../state/_mock/mock";
import { userData } from "../../state/userState";
import { ProfileFormProps } from "../../types/users/userTypes";

// ----------------------------------------------------------------------
// 프로파일 폼 처리
// ----------------------------------------------------------------------

const ProfileForm = ({ avatarImg }: ProfileFormProps) => {
  const [selfIntro, setSelfIntro] = useState("");
  const [data, setData] = useRecoilState(userData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateData = { selfIntro, avatarImg };
    const updateResult = await updateProfile(updateData);
    const payload = updateResult.payload;
    const { isSuccess, user } = payload;

    if (isSuccess) {
      setData(user);
    }
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
