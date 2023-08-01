import { Container, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { SearchAlbumListProps } from "../../../../types/state/search/searchTypes";
import SearchAlbumList from "./SearchAlbumList";

// ----------------------------------------------------------------------
// 영화 검색 메인 페이지 컴포넌트
// ----------------------------------------------------------------------

const SearchMainPage = ({ isCollection }: SearchAlbumListProps) => {
  return (
    <>
      {isCollection ? (
        <>
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Typography variant="h4" color="#5e8c71">
                컬렉션을 만들어보세요 😀
              </Typography>
            </Stack>
          </Container>
        </>
      ) : (
        <>
          <Helmet>
            <title> Search | POPCORN! </title>
          </Helmet>
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Typography variant="h4" gutterBottom>
                Search
              </Typography>
            </Stack>
          </Container>
        </>
      )}
      <SearchAlbumList isCollection={isCollection} />
    </>
  );
};

export default memo(SearchMainPage);
