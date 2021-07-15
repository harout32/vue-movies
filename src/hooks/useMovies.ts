import { ref, onMounted } from 'vue';
import MoviesApi from '../services/api/moviesApi';
import { Movie, MoviesQuery } from '../types/Movies';

export default function (perPage: number) {
  const isLoading = ref(true);
  const movies = ref<Movie[]>([]);
  const hasNext = ref<boolean>(false);

  const fetchMovies = async (query: MoviesQuery) => {
    isLoading.value = true;
    console.log('[NETWORK:GET_MOVIES:REQUEST]:', query);
    const { data } = await MoviesApi.getMovies({ ...query, perPage });
    console.log('[NETWORK:GET_MOVIES:RESPONSE]:', data);

    movies.value = data.list;
    hasNext.value = data.hasNext;
    isLoading.value = false;
  };

  onMounted(async () => {
    await fetchMovies({ pageIndex: 0, perPage });
  });

  return {
    movies,
    isLoading,
    hasNext,
    fetchMovies,
  };
}
