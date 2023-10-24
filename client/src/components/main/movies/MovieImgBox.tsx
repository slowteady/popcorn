import { Box, SxProps } from '@mui/material';
import { styled } from '@mui/system';

interface MovieImgBoxProps {
  alt: string;
  src: string;
  sx?: SxProps;
}

const MovieImgBox = ({ alt, src, sx }: MovieImgBoxProps) => {
  return (
    <Box sx={{ position: 'relative', ...defaultSx, ...sx }}>
      <StyledMovieImg alt={alt} src={src} />
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

const defaultSx = {
  width: '225px',
  minHeight: '400px'
};

export default MovieImgBox;
