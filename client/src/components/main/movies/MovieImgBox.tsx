import { Box, SxProps } from '@mui/material';
import { styled } from '@mui/system';

interface MovieImgBoxProps {
  alt?: string;
  src?: string;
  sx?: SxProps;
}

const MovieImgBox = ({ alt = '', src = '', sx }: MovieImgBoxProps) => {
  return (
    <Box sx={{ ...sx }}>
      <StyledMovieImg alt={alt} src={src} sx={{ ...sx }} />
    </Box>
  );
};

const StyledMovieImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

export default MovieImgBox;
