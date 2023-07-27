import axios from "axios";
import { API } from "../Config";
import {
  CollectionObj,
  MovieCreditsMember,
  MovieCreditsProps,
  MovieModalProps,
} from "../types/movies/movieTypes";

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

// 영화 검색 데이터 요청
export const getSearchMovieData = async (query: string, page: number) => {
  try {
    const url = `${API.BASE_URL}${API.SEARCH_PATH}`;
    const response = await axios.get(url, {
      params: {
        api_key: API.API_KEY,
        language: API.LANGUAGE,
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

// 컬렉션 등록
export const registerCollection = async (body: CollectionObj) => {
  try {
    const response = await axios.post("/api/collections/register", body);
    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 리스트 데이터 요청
export const getListBoardData = async (page: number, limit: number) => {
  try {
    const url = `/api/collections/${page}`;
    const response = await axios.get(url, {
      params: {
        limit,
      },
    });

    const data = response.data;
    const obj = {
      isSuccess: data.isSuccess,
      documentCount: data.documentCount,
      totalPages: data.totalPages,
      payload: data.collection,
    };

    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 디테일 데이터 요청
export const getDetailData = async (
  id: string,
  page: number,
  limit: number
) => {
  try {
    const url = `/api/collections/detail/${id}`;
    const response = await axios.get(url, {
      params: {
        page,
        limit,
      },
    });

    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 컬렉션 삭제 요청
export const deleteCollection = async (id: string) => {
  try {
    const url = "/api/collections";
    const response = await axios.delete(url, {
      params: {
        id,
      },
    });

    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
