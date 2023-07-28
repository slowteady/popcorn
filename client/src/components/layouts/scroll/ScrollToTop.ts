import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ----------------------------------------------------------------------
// 페이지 초기화 시, 항상 스크롤 최상단 위치 시켜주는 함수
// ----------------------------------------------------------------------

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
