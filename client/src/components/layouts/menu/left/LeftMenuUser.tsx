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

const StyledBox = styled(Box)({
  px: 2.5,
  py: 3,
  display: 'inline-flex'
});

const TypoBox = styled(Box)({
  ml: 2
});

export default LeftMenuUser;
