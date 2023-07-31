import axios from "axios";
import { MOVIE_API } from "../config/api/dataConfig";

// 영화 검색 데이터 요청
export const getSearchMovieData = async (query: string, page: number) => {
  try {
    const url = `${MOVIE_API.BASE_URL}${MOVIE_API.SEARCH_PATH}`;
    const response = await axios.get(url, {
      params: {
        api_key: MOVIE_API.API_KEY,
        language: MOVIE_API.LANGUAGE,
        query,
        page,
      },
    });
    const obj = { isSuccess: true, payload: response.data.results };

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
