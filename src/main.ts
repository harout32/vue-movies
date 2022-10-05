import { createApp } from 'vue';
import App from './App.vue';
import { worker } from './mocks/api/browsers';
import './App.css';

const prepare = async () => {
  await worker.start({
    serviceWorker: {
      url: '/vue-movies/mockServiceWorker.js',
    },
  });
};

prepare()
  .then(() => {
    createApp(App).mount('#app');
  })
  .catch(console.log);
