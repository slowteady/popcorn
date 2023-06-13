import { Avatar, Box, Container, FormControl, Typography } from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { mock } from "../../../state/_mock/mock";

// ----------------------------------------------------------------------
// 프로파일 수정 페이지
// ----------------------------------------------------------------------

const ProfilePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [avatarImg, setAvatarImg] = useState(mock.photoURL);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImgBox = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 삽입
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setAvatarImg(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Helmet>
        <title> Profile | POPCORN! </title>
      </Helmet>

      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Avatar
              src={avatarImg}
              alt="photoURL"
              sx={{ width: 72, height: 72 }}
            />
            {isHovered && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleImgBox}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Typography color="white" fontSize={12}>
                  이미지 추가
                </Typography>
              </Box>
            )}
          </Box>
          <FormControl></FormControl>
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
