import { Avatar, Box, Link, Typography, alpha, styled } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { USER_MAIN_OPTION, userSelector } from '../../../../state/userState';

const LeftMenuUser = () => {
  const { name, image } = useRecoilValue(userSelector(USER_MAIN_OPTION));

  return (
    <StyledBox>
      <Link underline='none'>
        <StyledAccount>
          <Avatar src={image} />
          <TypoBox>
            <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
              {name}
            </Typography>
          </TypoBox>
        </StyledAccount>
      </Link>
    </StyledBox>
  );
};

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

const StyledBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 2.5, 5)
}));

const TypoBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2)
}));

export default LeftMenuUser;
