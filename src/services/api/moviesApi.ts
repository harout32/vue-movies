import { MoviesQuery, MoviesResponse } from '../../types';
import { baseApi } from './baseApi';

const getMovies = async (query: MoviesQuery) => {
  return await baseApi.post<MoviesResponse>('/movies', query);
};

export default {
  getMovies,
};
