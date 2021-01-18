import { createApp } from 'vue';
import App from './App.vue';
import { inspect } from '@xstate/inspect';

inspect({
  iframe: false, // open in new window
});

createApp(App).mount('#app');
