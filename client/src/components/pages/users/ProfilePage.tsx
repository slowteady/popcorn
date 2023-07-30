import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { userData } from "../../../state/userState";
import ProfileForm from "./ProfileForm";

// ----------------------------------------------------------------------
// 프로파일 수정 페이지 컴포넌트
// ----------------------------------------------------------------------

const ProfilePage = () => {
  const usrData = useRecoilValue(userData);
  const [isHovered, setIsHovered] = useState(false); // hover 여부
  const [avatarImg, setAvatarImg] = useState<File>(); // 이미지 파일값 처리를 위한 state
  const [imgUrl, setImgUrl] = useState(usrData.image);
  const fileInput = useRef<HTMLInputElement>(null);

  // 이미지 초기값을 위한 useEffect
  useEffect(() => {
    setImgUrl(imgUrl);
  }, [imgUrl]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImgBox = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // 파일 삽입
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 파일 정보를 콘솔에 출력
    if (e.target.files) {
      const file = e.target.files[0];
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ position: "relative" }}
          >
            <input
              onChange={handleFileChange}
              ref={fileInput}
              type="file"
              accept="image/*"
              hidden
            />
            <Avatar
              src={imgUrl}
              alt="photoURL"
              sx={{ width: 156, height: 156 }}
            />
            {isHovered && (
              <Box
                onClick={handleImgBox}
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
              >
                <Typography color="white" fontSize={13}>
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
