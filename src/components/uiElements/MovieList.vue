<template>
  <div class="movie-list" data-test-id="movie-list">
    <div v-for="item of movies" :key="item.id" class="movie-list__item">
      <MovieItem :movie="item" :selected-genre="selectedGenreMap" :selected-show-type="selectedShowTypeMap" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FilterMap, Movie } from '../../types';
import MovieItem from './MovieItem.vue';
export default defineComponent({
  name: 'MovieList',
  components: { MovieItem },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      default: () => [],
    },
    selectedGenreMap: {
      type: Object as PropType<FilterMap>,
      default: () => ({}),
    },
    selectedShowTypeMap: {
      type: Object as PropType<FilterMap>,
      default: () => ({}),
    },
  },
});
</script>
<style lang="scss" scoped>
.movie-list {
  @apply flex flex-wrap w-full;
  &__item {
    @apply flex justify-center items-center w-full md:w-6/12 xl:w-4/12 mb-20;
  }
}
</style>
