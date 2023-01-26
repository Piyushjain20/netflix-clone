// we should store in {process.env.API_KEY}

const API_KEY = "e4ae8b78022a44ea39ee662b5ed4c6ae";

const requests = {
  fetchNetflixOriginalsMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchNetflixOriginalsTV: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorTV: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceTV: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesTV: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  fetchSeachResults: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=true`,
};
export default requests;
