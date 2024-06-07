import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/adminlte.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap';
import 'admin-lte/dist/js/adminlte.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

createApp(App).use(router).mount('#app');
