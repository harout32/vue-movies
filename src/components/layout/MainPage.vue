<template>
  <div class="flex flex-col min-h-screen" data-test-id="main-page">
    <Header />
    <MoviesPage />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import useDarkMode from '../../hooks/useDarkMode';
import Header from './Header.vue';
import MoviesPage from './MoviesPage.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    Header,
    MoviesPage,
  },
  setup: () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    provide('isDarkMode', isDarkMode.value);
    provide('setDarkMode', toggleDarkMode);
  },
});
</script>
