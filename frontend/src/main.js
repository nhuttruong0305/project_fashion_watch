import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.vue'

import router from './router';

createApp(App).use(router).mount('#app');

// createApp(App).mount('#app');