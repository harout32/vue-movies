<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/layout/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
