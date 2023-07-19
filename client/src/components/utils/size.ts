// 컬렉션 페이지 여부에 따른 사이즈 조절 함수
export const whichContainerSize = (isCollection: boolean) => {
  return isCollection
    ? {
        containerSize: { spacing: 2 },
        itemSize: { xs: 8, sm: 7, md: 6, lg: 6 },
        cartSize: { xs: 4, sm: 5, md: 6, lg: 6 },
        sx: { maxHeight: "600px", overflowY: "auto" },
      }
    : {
        containerSize: { spacing: 3 },
        itemSize: { xs: 8, sm: 6, md: 3, lg: 3 },
      };
};
