import axios from "axios";
import { API } from "../Config";

// movie api 요청
export const getMovieData = async (url: string, page: number) => {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API.API_KEY,
        language: API.LANGUAGE,
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
