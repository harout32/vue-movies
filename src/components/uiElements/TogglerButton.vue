<template>
  <label :for="dataTestId" class="toggler-button">
    <input
      :id="dataTestId"
      type="checkbox"
      :data-test-id="dataTestId"
      :checked="defaultValue"
      @input="onChange($event)"
    />
    <span class="toggler-button__slider"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TogglerButton',
  props: {
    dataTestId: {
      type: String,
      required: false,
      default: 'checkbox',
    },
    defaultValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['onChange'],
  setup: (_, { emit }) => {
    const onChange = (e: Event) => {
      const { checked } = <HTMLInputElement>e.target;
      emit('onChange', checked);
    };
    return {
      onChange,
    };
  },
});
</script>

<style lang="scss">
.toggler-button {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    width: 0;
    height: 0;
  }
  input:checked + &__slider:before {
    @apply bg-secondary-400;
  }

  input:checked + &__slider:before {
    transform: translateX(26px);
  }

  &__slider {
    @apply bg-gray-300 dark:bg-gray-500;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: 0.4s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}
</style>
