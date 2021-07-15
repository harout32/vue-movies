<template>
  <div class="pagination">
    <button
      class="pagination__prev"
      :class="{ 'pagination__prev--disabled': pageIndex === 0 }"
      data-test-id="pagination-prev"
      @click="handlePrev"
    >
      <ChevronLeftIcon class="h-8 w-8 dark:text-gray-100" />
    </button>
    <div class="pagination__number" data-test-id="pagination-number">
      {{ pageIndex + 1 }}
    </div>
    <button
      class="pagination__next"
      :class="{ 'pagination__next--disabled': !hasNext }"
      data-test-id="pagination-next"
      @click="handleNext"
    >
      <ChevronRightIcon class="h-8 w-8 dark:text-gray-100" />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
export default defineComponent({
  name: 'Pagination',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    pageIndex: {
      type: Number,
      default: () => 0,
    },
    hasNext: { type: Boolean, required: true },
  },
  emits: ['onNext', 'onPrev'],
  setup: (props, { emit }) => {
    const handleNext = () => {
      if (props.hasNext) emit('onNext');
    };

    const handlePrev = () => {
      if (props.pageIndex > 0) emit('onPrev');
    };
    return {
      handlePrev,
      handleNext,
    };
  },
});
</script>
<style lang="scss" scoped>
.pagination {
  @apply flex w-full justify-between items-center;

  &__number {
    @apply font-bold text-lg  dark:text-gray-100;
  }
  &__next,
  &__prev {
    @apply p-3 rounded-full bg-gray-200 dark:bg-gray-700;

    &--disabled {
      @apply cursor-not-allowed opacity-50;
    }
  }
}
</style>
