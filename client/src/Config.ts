// 1. popular 호출 https://api.themoviedb.org/3/movie/popular?api_key=50bce08bd7644cf283922a7b984a50ee&language=ko-KR
// 2. 영화 세부조회 https://api.themoviedb.org/3/movie/343611?api_key=50bce08bd7644cf283922a7b984a50ee&language=ko
// 3. 이미지 https://api.themoviedb.org/3/movie/385687/images?api_key=50bce08bd7644cf283922a7b984a50ee
// 4. 영화 검색 https://api.themoviedb.org/3/search/movie?api_key=50bce08bd7644cf283922a7b984a50ee&query=harry&language=ko-KR
// 5. 감독, 배우 검색 https://api.themoviedb.org/3/movie/1010581/credits?api_key=50bce08bd7644cf283922a7b984a50ee&language=ko

export const API = {
  API_KEY: "50bce08bd7644cf283922a7b984a50ee",
  LANGUAGE: "ko-KR",
  BASE_URL: "https://api.themoviedb.org/3/",
  IMAGE_BASE_URL: "http://image.tmdb.org/t/p/",
  IMAGE_SIZE_300: "w300",
  IMAGE_SIZE_500: "w500",
  POPULAR_PATH: "movie/popular/",
  NOWPLAYING_PATH: "movie/now_playing",
  TOP_RATED: "movie/top_rated",
  SEARCH_PATH: "search/movie",
};
