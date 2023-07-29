// ----------------------------------------------------------------------
// 사용자 프로파일 타입 정의
// ----------------------------------------------------------------------

export interface ProfileFormProps {
  avatarImg: File | undefined;
}

export interface ProfileBody extends ProfileFormProps {
  selfIntro: string;
}
