import { createApp } from 'vue' // 혹시 vue3으로 나중에 업데이트해서 없으면 추가할 것
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router.js'



createApp(App).use(router).mount('#app')
