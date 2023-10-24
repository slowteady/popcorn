import { Container, Modal, styled } from '@mui/material';
import { MoviesDetailProps } from '../../../../types/movie';
import MovieDetail from '../detail/MovieDetail';

interface MovieModalProps extends MoviesDetailProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MovieModal = ({ open, setOpen, movie }: MovieModalProps) => {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <FlexModal onClose={closeModal} open={open}>
      <StyledContainer sx={mediaSx}>
        <MovieDetail movie={movie} />
      </StyledContainer>
    </FlexModal>
  );
};

const FlexModal = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f6f6',
  border: '1px solid rgb(0, 0, 0, 0.8)',
  borderRadius: '2%',
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  margin: theme.spacing(0, 4),
  overflow: 'auto'
}));

const mediaSx = {
  maxWidth: {
    xs: 444,
    sm: 600
  },
  maxHeight: {
    xs: 600
  }
};
export default MovieModal;
