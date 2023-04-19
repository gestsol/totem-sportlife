import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import Vidle from 'v-idle-3'

createApp(App)
    .use( router )
    .use( Vidle)
    .mount('#app')