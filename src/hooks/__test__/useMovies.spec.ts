import useMovies from '../useMovies';

import MoviesApi from '../../services/api/moviesApi';

jest.mock('vue', () => {
  return {
    ...jest.requireActual('vue'),
    onMounted: jest.fn((cb) => cb()),
  };
});

describe('useMovies', () => {
  beforeEach(() => jest.clearAllMocks());
  it('should call getMovies initially', () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: false, list: [] } } as any)));

    useMovies(10);

    expect(spy).toHaveBeenCalledWith({ pageIndex: 0, perPage: 10 });
  });

  it('should call getMovies when calling fetchMovies', () => {
    const spy = jest
      .spyOn(MoviesApi, 'getMovies')
      .mockImplementation(() => new Promise((resolve) => resolve({ data: { hasNext: false, list: [] } } as any)));

    const { fetchMovies } = useMovies(10);

    fetchMovies({ filters: { genre: [1], showType: [0] }, pageIndex: 1, search: 'some search' });

    expect(spy.mock.calls).toMatchSnapshot();
  });
});
