import axios from "axios";
import { MOVIE_API } from "../config/api/dataConfig";
import {
  MovieCreditsMember,
  MovieCreditsObj,
  MovieResponseData,
  MoviesObj
} from "../types/state/movies/moviesTypes";

// ----------------------------------------------------------------------
// 영화 관련 서비스
// ----------------------------------------------------------------------

// popular 포스터 최대 20개 요청
export const getPoster = async () => {
  try {
    const url = `${MOVIE_API.BASE_URL}${MOVIE_API.POPULAR_PATH}`;
    const response = await axios.get(url, {
      params: {
        api_key: MOVIE_API.API_KEY,
        language: "en",
      },
    });

    const results = response.data.results;
    const arr = results.map((m: MoviesObj) => {
      return m.poster_path;
    });

    return arr;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// Movies 데이터 요청
export const getMovieData = async (url: string, page: number) => {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: MOVIE_API.API_KEY,
        language: MOVIE_API.LANGUAGE,
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

// Movie Detail 데이터 요청
export const getMovieDetailData = async (url: string) => {
  try {
    const movieResponse = await axios.get(url, {
      params: {
        api_key: MOVIE_API.API_KEY,
        language: MOVIE_API.LANGUAGE,
      },
    });
    const creditsUrl = `${url}/${MOVIE_API.CREDITS_PATH}`;
    const creditsResponse = await axios.get(creditsUrl, {
      params: {
        api_key: MOVIE_API.API_KEY,
        language: MOVIE_API.LANGUAGE,
      },
    });
    const transObj = transformMovieData(
      movieResponse.data,
      creditsResponse.data
    );

    const obj = {
      isSuccess: true,
      payload: {
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
  movieData: MovieResponseData["movie"],
  creditsData: MovieCreditsObj["credits"]
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

  // 장르: 최대 2개
  if (genres) {
    const arr = genres.slice(0, 2);
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
    const arr = cast.filter((casts: MovieCreditsMember) =>
      [0, 1, 2].includes(casts.order)
    );
    obj.actor = arr.map((casts: MovieCreditsMember) => casts.name);
  }

  // 감독: 최대 2명
  if (crew) {
    const arr = crew
      .filter((crews: MovieCreditsMember) => "Director".includes(crews.job))
      .slice(0, 2);
    obj.director = arr.map((crews: MovieCreditsMember) => crews.name);
  }

  return obj;
};