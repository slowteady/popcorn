import { Box, SxProps } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import Icon from '../../../common/icon/Icon';

interface MovieImgBoxProps {
  alt: string;
  src: string;
  sx?: SxProps;
  imgSx?: SxProps;
}

const NO_IMG_ICON = 'carbon:no-image';

const MovieImgBox = ({ alt, src, sx, imgSx }: MovieImgBoxProps) => {
  const [hasError, setHasError] = useState(false);

  const onError = () => {
    setHasError(true);
  };

  return (
    <Box sx={{ position: 'relative', ...defaultSx, ...sx }}>
      {hasError ? (
        <NoImgBox>
          <Icon icon={NO_IMG_ICON} width={84} />
        </NoImgBox>
      ) : (
        <StyledMovieImg onError={onError} alt={alt} src={src} sx={{ ...imgSx }} />
      )}
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
  minHeight: '400px'
};

const NoImgBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: 'center',
  lineHeight: 30
}));

export default MovieImgBox;
