import React, { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../../../Config";
import { getMovieDetailData } from "../../../../services/movieService";

// ----------------------------------------------------------------------
// 모달 페이지
// ----------------------------------------------------------------------

interface ModalPageProps {
  id: number;
}

const ModalPage = ({ id }: ModalPageProps) => {
  const [enabled, setEnabled] = useState(false);

  const url = `${API.BASE_URL}movie/${id}`;
  const { status, data } = useQuery(
    ["movieDetailData", url],
    () => getMovieDetailData(url),
    { enabled: true }
  );

  return <div>ModalPage</div>;
};

export default ModalPage;
