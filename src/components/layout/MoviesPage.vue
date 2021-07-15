<template>
  <div class="movies-page" data-test-id="movies-page">
    <div class="movies-page__search">
      <Input type="text" placeholder="Search" @input="handleInputSearch" />
    </div>
    <div class="movies-page__filters">
      <FilterSelect
        v-model="selectedGenre"
        :options="genreOptions"
        title="Genre"
        :selected-map="selectedGenreMap"
        data-test-id="genre-filter"
      ></FilterSelect>
      <FilterSelect
        v-model="selectedType"
        :options="showTypeOptions"
        title="Type"
        :selected-map="selectedShowTypeMap"
        data-test-id="type-filter"
      ></FilterSelect>
    </div>
    <div class="movies-page__movie-list">
      <div v-if="isLoading" data-test-id="movie-list-loading" class="movies-page__movie-list__info-text">
        Loading Please Wait
      </div>
      <div
        v-if="!isLoading && movies.length === 0"
        data-test-id="movie-list-not-found"
        class="movies-page__movie-list__info-text"
      >
        No Results Found
      </div>
      <MovieList
        v-if="!isLoading && movies.length > 0"
        :movies="movies"
        :selected-genre-map="selectedGenreMap"
        :selected-show-type-map="selectedShowTypeMap"
      />
    </div>
    <Pagination
      :page-index="pageIndex"
      :has-next="hasNext"
      @on-next="pageIndex = pageIndex + 1"
      @on-prev="pageIndex = pageIndex - 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import { useDebounce } from '@vueuse/core';
import MovieList from '../uiElements/MovieList.vue';
import Pagination from '../uiElements/Pagination.vue';
import Input from '../uiElements/Input.vue';
import useMovies from '../../hooks/useMovies';
import FilterSelect from '../uiElements/FilterSelect.vue';
import { GENRE, SHOW_TYPE } from '../../statics';
import { getMapFromArray } from '../../utils';

export default defineComponent({
  name: 'MoviesPage',
  components: {
    Input,
    MovieList,
    FilterSelect,
    Pagination,
  },
  setup: () => {
    const { movies, hasNext, isLoading, fetchMovies } = useMovies(6);
    const selectedGenre = ref<number[]>([]);
    const selectedType = ref<number[]>([]);
    const selectedGenreMap = computed(() => getMapFromArray<boolean>(selectedGenre.value));
    const selectedShowTypeMap = computed(() => getMapFromArray<boolean>(selectedType.value));
    const searchTerm = ref<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const pageIndex = ref<number>(0);

    const handleInputSearch = (e: Event) => {
      searchTerm.value = (<HTMLInputElement>e.target).value || '';
    };

    watch([selectedGenre, selectedType, debouncedSearchTerm], () => {
      if (pageIndex.value === 0) {
        fetchMovies({
          filters: { genre: selectedGenre.value, showType: selectedType.value },
          search: debouncedSearchTerm.value,
          pageIndex: 0,
        });
      } else {
        pageIndex.value = 0;
      }
    });

    watch([pageIndex], () => {
      fetchMovies({
        filters: { genre: selectedGenre.value, showType: selectedType.value },
        search: debouncedSearchTerm.value,
        pageIndex: pageIndex.value,
      });
    });

    return {
      isLoading,
      movies,
      hasNext,
      handleInputSearch,
      selectedGenre,
      genreOptions: GENRE,
      selectedType,
      selectedGenreMap,
      showTypeOptions: SHOW_TYPE,
      selectedShowTypeMap,
      pageIndex,
    };
  },
});
</script>

<style lang="scss" scoped>
.filters {
  > div {
    margin-right: 1rem;
  }
}

.movies-page {
  @apply flex-grow flex flex-col px-10 md:px-20  lg:px-52 dark:bg-gray-600 bg-gray-100 pb-20;
  &__search {
    @apply flex justify-center p-5;
  }

  &__filters {
    @apply filters flex p-5;
  }
  &__movie-list {
    @apply flex-grow flex items-center justify-center;

    &__info-text {
      @apply dark:text-gray-100;
    }
  }
}
</style>
