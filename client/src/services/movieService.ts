import axios from "axios";
import { API } from "../Config";
import { ModalMovieProps } from "../types/movies/movieTypes";

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

// movie api 디테일 요청
export const getMovieDetailData = async (url: string) => {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API.API_KEY,
        language: API.LANGUAGE,
      },
    });

    const {
      genres,
      tagline,
      poster_path,
      release_date,
      runtime,
      title,
      vote_average,
    } = response.data;
    transformMovieData(response.data);

    const obj = {
      payload: {
        isSuccess: true,
        movie: {
          genres,
          tagline,
          poster_path,
          release_date,
          runtime,
          title,
          vote_average,
        },
      },
    };
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

const transformMovieData = (data: ModalMovieProps['movie']) => {
  const initData = {
    genres: "-",
    tagline: "-",
    poster_path: "-",
    release_date: "-",
    runtime: "-",
    title: "-",
    vote_average: "-",
  };
  const obj = initData;

  if(data.genres) {

  }

  return obj;
};
