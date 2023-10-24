import { Box, Typography, styled } from '@mui/material';

interface MovieDetailInfoProps {
  movies: {
    title: string;
    tagline: string;
    release_date: string;
    runtime: string;
    vote_average: string;
    genres: string[];
    actor: string[];
    director: string[];
  };
}

const MovieDetailInfo = ({ movies }: MovieDetailInfoProps) => {
  const { title, actor, director, genres, release_date, runtime, tagline, vote_average } = movies;
  const detailArray = [
    { label: '제목', value: title },
    { label: '감독', value: director },
    { label: '배우', value: actor },
    { label: '릴리즈', value: release_date },
    { label: '장르', value: genres },
    { label: '상영시간', value: runtime },
    { label: '평점', value: vote_average },
    { label: '태그', value: tagline }
  ];

  return (
    <StyledBox>
      {detailArray.map(({ label, value }, index) => (
        <>
          <Typography variant='h6' noWrap>
            {label}
          </Typography>
          {Array.isArray(value) ? (
            value.map((item, idx) => <Content key={idx}>{item}</Content>)
          ) : (
            <Content key={index}>{value}</Content>
          )}
        </>
      ))}
    </StyledBox>
  );
};

const Content = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  margin: theme.spacing(1, 0),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
}));

const StyledBox = styled(Box)(() => ({
  height: '100%',
  overflow: 'auto'
}));
export default MovieDetailInfo;
