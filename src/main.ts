import { createApp } from 'vue';
import './plugins/assets';
import { setupUI } from '@/plugins';
import { setupStore } from './store';
// import { setupDayjs, setupIconifyOffline } from './plugins';
import App from './App.vue';

async function setupApp() {
  // setupDayjs();

  // setupIconifyOffline();

  const app = createApp(App);
  setupUI(app);

  setupStore(app);
  app.mount('#app');
}

setupApp();
