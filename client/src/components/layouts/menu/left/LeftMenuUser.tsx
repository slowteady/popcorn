import { Avatar, Box, Link, Typography, alpha, styled } from '@mui/material';

const LeftMenuUser = () => {
  return (
    <StyledBox>
      <Link underline='none'>
        <StyledAccount>
          <Avatar />
          <TypoBox>
            <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
              MOCK
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
