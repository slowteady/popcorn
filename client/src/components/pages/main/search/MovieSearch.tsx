import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../../../../state/searchState";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";

const MovieSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);

  return (
    <>
      <TextField
        value={keyword && strCheck.isNotEmpty(keyword) ? keyword : undefined}
        sx={{ width: 280, ml: "24px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={"eva:search-fill"}
                sx={{ ml: 1, width: 20, height: 20, color: "text.disabled" }}
              />
            </InputAdornment>
          ),
        }}
        placeholder="영화를 검색해주세요"
      />
      <Button variant="contained" sx={{ margin: "10px" }}>
        Search
      </Button>
    </>
  );
};

export default MovieSearch;
