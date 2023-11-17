import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/base.css'
import 'amfe-flexible'
import './util/rem'
createApp(App).use(router).mount('#app')
