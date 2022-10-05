import { rest } from 'msw';
import allMovies from './movies.json';
import { Movie, MoviesQuery } from '../../types';
import { ShowTypeEnum } from '../../statics';
export default [
  rest.post('**/api/movies', (req, res, ctx) => {
    const { filters, search, perPage = 1, pageIndex = 0 } = req.body as MoviesQuery;
    let filteredMovies: Movie[] = allMovies;
    if (filters ?? search) {
      const isSeriesApplied = filters?.showType?.includes(ShowTypeEnum.SERIES) ?? false;
      const isMoviesApplied = filters?.showType?.includes(ShowTypeEnum.MOVIE) ?? false;
      filteredMovies = allMovies.filter((movie) => {
        let isGenreMatch = true;
        let isTypeMatch = true;

        if (search && !movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return false;
        }

        if (!(isMoviesApplied && isSeriesApplied) || !(!isMoviesApplied && !isSeriesApplied)) {
          if (isMoviesApplied) {
            isTypeMatch = !movie.is_series;
          } else if (isSeriesApplied) {
            isTypeMatch = movie.is_series;
          }
        }
        if ((filters?.genre ?? []).length > 0) {
          isGenreMatch = !!movie.genre.find((genre) => filters?.genre?.includes(genre.id));
        }
        return isGenreMatch && isTypeMatch;
      });
    }

    const maxPageCount = Math.ceil(filteredMovies.length / perPage);
    const hasNext = pageIndex + 1 < maxPageCount;

    return res(
      ctx.delay(800),
      ctx.json({
        hasNext,
        list: filteredMovies.slice(perPage * pageIndex, perPage * pageIndex + perPage),
      }),
    );
  }),
];
