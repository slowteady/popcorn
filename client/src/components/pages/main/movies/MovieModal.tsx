import React from "react";

// ----------------------------------------------------------------------
// Movie 모달
// ----------------------------------------------------------------------

interface MovieModalProps {
  open: boolean;
  onClose: () => void;
}

const MovieModal = ({ open, onClose }: MovieModalProps) => {
  return <div>MovieModal</div>;
};

export default MovieModal;
