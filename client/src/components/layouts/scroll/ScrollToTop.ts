import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ----------------------------------------------------------------------
// 스크롤 상단 위치 시켜주는 컴포넌트
// ----------------------------------------------------------------------

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
