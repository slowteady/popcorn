import React from "react";
import { MovieCardProps } from "../../../../types/movies/movieTypes";

const ModalPage = ({ movie }: MovieCardProps) => {
  const { id, poster_path, release_date, title, vote_average } = movie;
  return <div>ModalPage</div>;
};

export default ModalPage;
