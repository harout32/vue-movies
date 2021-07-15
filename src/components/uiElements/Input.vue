<template>
  <input class="input" :data-test-id="dataTestId" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    dataTestId: {
      type: String,
      required: false,
      default: 'input',
    },
  },
});
</script>
<style lang="scss">
.input {
  @apply rounded-full
      border-2 border-secondary-400
      h-10
      bg-gray-100
      dark:bg-gray-600 dark:text-white
      outline-none
      p-3;
}
</style>
