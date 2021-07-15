import { render } from '@testing-library/vue';
import MovieItem from '../MovieItem.vue';
import { Movie } from '../../../types';

const renderMovieItem = (movie: Movie) =>
  render(MovieItem, {
    props: {
      movie,
    },
  });

describe('MovieItem', () => {
  it('should render movie title correctly', () => {
    const { getByTestId } = renderMovieItem({
      title: 'movie title',
    } as Movie);

    expect(getByTestId('movie-title')).toHaveTextContent('movie title');
  });

  it('should render movie year correctly', () => {
    const { getByTestId } = renderMovieItem({
      release_date: '2021-06-25T00:00:00.000000Z',
    } as Movie);

    expect(getByTestId('movie-year')).toHaveTextContent('2021');
  });

  it('should render movie type "Series" correctly', () => {
    const { getByTestId } = renderMovieItem({
      is_series: true,
    } as Movie);

    expect(getByTestId('movie-type')).toHaveTextContent('Series');
  });

  it('should render movie type "Movie" correctly', () => {
    const { getByTestId } = renderMovieItem({
      is_series: false,
    } as Movie);

    expect(getByTestId('movie-type')).toHaveTextContent('Movie');
  });

  it('should render movie cast correctly', () => {
    const { getByTestId } = renderMovieItem({
      actors: [
        { id: 1, name: 'actor1' },
        { id: 2, name: 'actor2' },
      ],
    } as Movie);

    expect(getByTestId('movie-cast').childElementCount).toBe(2);
    expect(getByTestId('movie-cast')).toHaveTextContent('actor1');
    expect(getByTestId('movie-cast')).toHaveTextContent('actor2');
  });

  it('should render movie genre correctly', () => {
    const { getByTestId } = renderMovieItem({
      genre: [
        { id: 1, title: 'genre1' },
        { id: 2, title: 'genre2' },
      ],
    } as Movie);

    expect(getByTestId('movie-genre').childElementCount).toBe(2);
    expect(getByTestId('movie-genre')).toHaveTextContent('genre1');
    expect(getByTestId('movie-genre')).toHaveTextContent('genre2');
  });
});
