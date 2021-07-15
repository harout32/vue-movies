<template>
  <div class="movie" data-test-id="movie">
    <div class="movie__item">
      <h2 class="movie__item__title" data-test-id="movie-title">{{ movie.title }}</h2>
      <div>
        <div
          class="movie__item__type"
          :class="{ 'movie__item__type--active ': isTypeSelected }"
          data-test-id="movie-type"
        >
          {{ movie.is_series ? 'Series' : 'Movie' }}
        </div>
        <div class="movie__item__year" data-test-id="movie-year">{{ year }}</div>
      </div>
      <p class="movie__item__actors" data-test-id="movie-cast">
        <span v-for="(actor, index) of movie.actors" :key="actor.id">
          {{ actor.name }}
          <template v-if="index !== movie.actors.length - 1">, </template>
        </span>
      </p>
      <div class="movie__item__genre" data-test-id="movie-genre">
        <div
          v-for="genre of movie.genre"
          :key="genre.id"
          class="movie__item__genre__item"
          :class="{ 'movie__item__genre__item--active': selectedGenre[genre.id] }"
        >
          {{ genre.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { parseISO } from 'date-fns';
import { ShowTypeEnum } from '../../statics';
import { FilterMap, Movie } from '../../types';
export default defineComponent({
  name: 'MoviesItem',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
    selectedGenre: {
      type: Object as PropType<FilterMap>,
      default: () => ({}),
    },
    selectedShowType: {
      type: Object as PropType<FilterMap>,
      default: () => ({}),
    },
  },
  setup: (props) => {
    const year = computed(() => parseISO(props.movie.release_date).getFullYear());
    const isTypeSelected = computed(() => {
      const showType = props.movie.is_series ? ShowTypeEnum.SERIES : ShowTypeEnum.MOVIE;
      return props.selectedShowType[showType];
    });

    return {
      year,
      isTypeSelected,
    };
  },
});
</script>
<style lang="scss" scoped>
.movie {
  @apply bg-white
      dark:bg-gray-700
      shadow-lg
      border-gray-100
      dark:border-gray-700
      h-96
      border
      rounded-3xl
      p-8
      flex
      space-x-8;
  &__item {
    @apply flex flex-col w-52 space-y-4;
    &__title {
      @apply text-3xl font-bold dark:text-gray-100;
    }
    &__type {
      @apply font-medium text-sm text-gray-400;
      &--active {
        @apply text-secondary-400;
      }
    }
    &__year {
      @apply text-lg text-gray-800 dark:text-gray-100;
    }
    &__actors {
      @apply text-gray-400 max-h-40 overflow-y-hidden flex-grow;
    }
    &__genre {
      @apply flex flex-wrap;
      &__item {
        @apply rounded-full bg-gray-200 px-2 py-1 mr-1 mb-1;
        &--active {
          @apply bg-secondary-400;
        }
      }
    }
  }
}
</style>
