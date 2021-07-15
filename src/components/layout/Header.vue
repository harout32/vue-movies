<template>
  <div class="header" data-test-id="header">
    <toggler-button :default-value="isDarkMode" @on-change="toggleDarkMode"></toggler-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import TogglerButton from '../uiElements/TogglerButton.vue';

export default defineComponent({
  name: 'Header',
  components: {
    TogglerButton,
  },
  setup: () => {
    const toggleDarkMode = inject<() => void>('setDarkMode') || (() => {});
    const isDarkMode = inject<boolean>('isDarkMode');
    return {
      toggleDarkMode,
      isDarkMode,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  @apply bg-secondary-400 dark:bg-gray-700 h-16 flex justify-end items-center px-10;
}
</style>
