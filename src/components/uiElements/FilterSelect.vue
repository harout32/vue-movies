<template>
  <Toggle>
    <template #toggler="{ active }">
      <button class="filter-button" :class="{ 'filter-button--active': active }" :data-test-id="dataTestId">
        {{ title }}
        <ChevronDownIcon class="h-5 w-5" :class="{ 'transform rotate-180': active }" />
      </button>
    </template>
    <template #list>
      <div class="filter-list" :data-test-id="dataTestId + '-list'">
        <div
          v-for="option of options"
          :key="option.id"
          :class="{
            'filter-list__item--active': selectedMap[option.id],
          }"
          class="filter-list__item"
          :data-test-id="dataTestId + '-list-item'"
          @click="handleOptionClick(option)"
        >
          {{ option.title }}
        </div>
      </div>
    </template>
  </Toggle>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import Toggle from './Toggle.vue';
import { FilterMap } from '../../types';
interface Option {
  id: number;
  title: string;
}

export default defineComponent({
  name: 'FilterSelect',
  components: {
    Toggle,
    ChevronDownIcon,
  },
  props: {
    dataTestId: {
      type: String,
      required: false,
      default: 'filter',
    },
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    modelValue: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    selectedMap: {
      type: Object as PropType<FilterMap>,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const handleOptionClick = (option: Option) => {
      const foundIndex = props.modelValue.indexOf(option.id);

      // remove item
      if (foundIndex === -1) {
        emit('update:modelValue', [...props.modelValue, option.id]);
        return;
      }
      // add item
      emit('update:modelValue', [...props.modelValue.slice(0, foundIndex), ...props.modelValue.slice(foundIndex + 1)]);
    };
    return {
      handleOptionClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.filter-button {
  @apply flex
          items-center
          rounded-full
          bg-gray-200
          dark:bg-gray-700 dark:text-gray-100
          px-4
          py-2
          font-bold
          transition-all
          duration-300
          ease-in-out;
  &--active {
    @apply dark:bg-gray-800 bg-gray-300;
  }
}
.filter-list {
  @apply bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded;
  &__item {
    @apply cursor-pointer
            hover:bg-secondary-200 hover:bg-opacity-50
            dark:hover:bg-secondary-200 dark:hover:text-black dark:bg-gray-700
            dark:text-gray-100
            transition-all
            rounded-full
            px-3
            py-1
            my-1;
    &--active {
      @apply dark:text-black bg-secondary-300 hover:bg-secondary-300 dark:hover:bg-secondary-300 dark:bg-secondary-300;
    }
  }
}
</style>
