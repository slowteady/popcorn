import axios from "axios";
import { API } from "../Config";
import { MovieCreditsProps, MovieModalProps } from "../types/movies/movieTypes";

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
    const movieResponse = await axios.get(url, {
      params: {
        api_key: API.API_KEY,
        language: API.LANGUAGE,
      },
    });

    const creditsUrl = `${url}/${API.CREDITS_PATH}`;
    const creditsResponse = await axios.get(creditsUrl, {
      params: {
        api_key: API.API_KEY,
        language: API.LANGUAGE,
      },
    });

    const transObj = transformMovieData(
      movieResponse.data,
      creditsResponse.data
    );

    const obj = {
      payload: {
        isSuccess: true,
        movie: transObj,
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

// 데이터 변환
const transformMovieData = (
  movieData: MovieModalProps["movie"],
  creditsData: MovieCreditsProps["credits"]
) => {
  const {
    genres,
    tagline,
    poster_path,
    release_date,
    runtime,
    title,
    vote_average,
  } = movieData;

  const { cast, crew } = creditsData;

  const initData = {
    genres: [] as string[],
    tagline: "-",
    poster_path: "-",
    release_date: "-",
    runtime: "-",
    title: "-",
    vote_average: "-",
    actor: [],
    director: [],
  };
  const obj = initData;

  // 장르: 최대 3개
  if (genres) {
    const arr = genres.slice(0, 3);
    obj.genres = arr.map((genre) => genre.name);
  }

  // 태그 라인
  if (tagline) {
    obj.tagline = tagline;
  }

  // 포스터
  if (poster_path) {
    obj.poster_path = poster_path;
  }

  // 릴리즈 날짜
  if (release_date) {
    obj.release_date = release_date;
  }

  // 상영시간
  if (runtime) {
    obj.runtime = String(runtime);
  }

  // 제목
  if (title) {
    obj.title = title;
  }

  // 평점
  if (vote_average) {
    obj.vote_average = String(vote_average);
  }

  // 배우: 최대 3명
  if (cast) {
    const arr = cast.filter((casts: any) => [0, 1, 2].includes(casts.order));
    obj.actor = arr.map((casts: any) => casts.name);
  }

  // 감독: 최대 3명
  if (crew) {
    const arr = crew
      .filter((crews: any) => "Director".includes(crews.job))
      .slice(0, 2);
    obj.director = arr.map((crews: any) => crews.name);
  }

  return obj;
};
