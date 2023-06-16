import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProfileForm from "../../utils/ProfileForm";

// ----------------------------------------------------------------------
// 프로파일 수정 페이지
// ----------------------------------------------------------------------

const ProfilePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [avatarImg, setAvatarImg] = useState<File>();
  const [imgUrl, setImgUrl] = useState<string>();
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
    if (event.target.files) {
      const file = event.target.files[0];
      setAvatarImg(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImgUrl(e.target.result as string);
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
              src={imgUrl}
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
          <ProfileForm avatarImg={avatarImg} />
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
