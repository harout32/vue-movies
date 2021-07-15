import { createApp } from 'vue';
import App from './App.vue';
import { worker } from './mocks/api/browsers';
import './App.css';

worker.start() as Promise<void>;

createApp(App).mount('#app');
