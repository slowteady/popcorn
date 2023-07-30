import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent, memo, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { updateProfileUser } from "../../../services/userService";
import { userData } from "../../../state/userState";
import { ProfileFormProps } from "../../../types/state/users/profileTypes";

// ----------------------------------------------------------------------
// 프로파일 Form 컴포넌트
// ----------------------------------------------------------------------

const ProfileForm = ({ avatarImg }: ProfileFormProps) => {
  const usrData = useRecoilValue(userData);
  const setData = useSetRecoilState(userData);
  const { intro, name, email } = usrData;
  const [selfIntro, setSelfIntro] = useState("");

  useEffect(() => {
    setSelfIntro(intro);
  }, [intro]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateData = { selfIntro, avatarImg };
    const updateResult = await updateProfileUser(updateData);
    const payload = updateResult.payload;
    const { isSuccess, user } = payload;

    if (isSuccess) {
      // 전역 유저 객체 업데이트
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
          {name}
        </Typography>
        <Typography color="black" fontSize={18}>
          {email}
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

export default memo(ProfileForm);
