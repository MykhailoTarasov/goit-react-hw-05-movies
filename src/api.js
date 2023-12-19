import axios from 'axios';

const API_KEY = 'ea0b04790d5245d0350b210d2ab5fbd3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function serviceTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function serviceSearchMovies(query, page = 1) {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query: query,
    page: page,
  });

  const response = await axios.get(`/search/movie?${params}`);
  return response.data;
}

export async function serviceMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function serviceMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data;
}

export async function serviceMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data;
}