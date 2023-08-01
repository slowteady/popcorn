// ----------------------------------------------------------------------
// 테이블 설정
// ----------------------------------------------------------------------

export const ADD_TABLE_CONF = {
  // 한 페이지 행 갯수
  ROWSPERPAGE: 5,

  // 테이블 헤더 Config
  TABLE_HEAD: [
    { id: "title", label: "제목", alignRight: false },
    { id: "release_date", label: "릴리즈", alignRight: false },
  ],
};

export const LIST_TABLE_CONF = {
  // 한 페이지 행 갯수
  ROWSPERPAGE: 10,

  // 테이블 헤더 Config
  TABLE_HEAD: [
    { id: "collection", label: "컬렉션", alignRight: false },
    { id: "author", label: "큐레이터", alignRight: false },
    { id: "rgstDate", label: "등록일자", alignRight: false },
  ],
};
