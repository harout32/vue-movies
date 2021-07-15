import { nextTick } from 'vue';
import { fireEvent, render } from '@testing-library/vue';
import MoviesPage from '../MoviesPage.vue';
import MoviesApi from '../../../services/api/moviesApi';

describe('MoviesPage', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should be rendered', () => {
    jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: false, list: [] } } as any)));
    const { getByTestId } = render(MoviesPage);
    expect(getByTestId('movies-page')).toBeInTheDocument();
  });

  it('should call getMovies when changing input value', async () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: false, list: [] } } as any)));
    const { getByTestId } = render(MoviesPage);

    fireEvent.update(getByTestId('input'), 'something');

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await nextTick();
    expect(spy.mock.calls).toMatchSnapshot();
  });

  it('should call getMovies when clicking on next page', async () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: true, list: [] } } as any)));
    const { getByTestId } = render(MoviesPage);

    fireEvent.click(getByTestId('pagination-next'));

    await nextTick();
    expect(spy.mock.calls).toMatchSnapshot();
  });

  it('should call getMovies when changing type filters', async () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: true, list: [] } } as any)));
    const { getByTestId, getAllByTestId } = render(MoviesPage);

    fireEvent.click(getByTestId('type-filter'));
    await nextTick();
    fireEvent.click(getAllByTestId('type-filter-list-item')[0]);
    await nextTick();

    expect(spy.mock.calls).toMatchSnapshot();
  });

  it('should call getMovies when changing genre filters', async () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: true, list: [] } } as any)));
    const { getByTestId, getAllByTestId } = render(MoviesPage);

    fireEvent.click(getByTestId('genre-filter'));
    await nextTick();
    fireEvent.click(getAllByTestId('genre-filter-list-item')[0]);
    await nextTick();

    expect(spy.mock.calls).toMatchSnapshot();
  });
});
