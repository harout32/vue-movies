import { render } from '@testing-library/vue';
import MovieList from '../MovieList.vue';

describe('MovieList', () => {
  it('should render correct count of movies', () => {
    const { getAllByTestId } = render(MovieList, {
      props: {
        movies: [
          {
            id: 2,
            title: 'movie1',
          },
          {
            id: 2,
            title: 'movie2',
          },
        ],
      },
    });

    expect(getAllByTestId('movie')).toHaveLength(2);
  });

  it('should not render when no movies provided', () => {
    const { queryByTestId } = render(MovieList);

    expect(queryByTestId('movie')).not.toBeInTheDocument();
  });
});
