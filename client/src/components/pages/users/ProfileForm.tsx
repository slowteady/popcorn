import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent, memo, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { updateProfileUser } from "../../../services/userService";
import { userData } from "../../../state/userState";
import { ProfileFormProps } from "../../../types/state/users/profileTypes";
import { isSuccessValidate } from "../../../utils/auth/responseValidate";

// ----------------------------------------------------------------------
// 프로파일 Form 컴포넌트
// ----------------------------------------------------------------------

const ProfileForm = ({ avatarImg }: ProfileFormProps) => {
  const [usrData, setUsrData] = useRecoilState(userData);
  const [selfIntro, setSelfIntro] = useState("");
  const { intro, name, email } = usrData;

  useEffect(() => {
    setSelfIntro(intro);
  }, [intro]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { selfIntro, avatarImg };
    const response = await updateProfileUser(body);
    const { isSuccess, user } = response.payload;
    const isComplete = isSuccessValidate(response);

    if (isComplete && isSuccess) {
      // 전역 유저 객체 업데이트
      setUsrData(user);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Typography color="black" fontSize={18}>
          {name}
        </Typography>
        <Typography color="black" fontSize={18}>
          {email}
        </Typography>
        <TextField
          onChange={(e) => setSelfIntro(e.target.value)}
          inputProps={{ maxLength: 100 }}
          value={selfIntro}
          label="자기소개"
          rows={8}
          multiline
          sx={{ mt: 2, width: "100%" }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 4, mb: 2 }}
        >
          저장
        </Button>
      </Box>
    </>
  );
};

export default memo(ProfileForm);
