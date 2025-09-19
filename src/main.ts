import {createApp} from 'vue'
import App from "./App.vue"
import './style.css' // importa o// Tailwind
import router from './route/routes'

createApp(App).use(router).mount('#app');
