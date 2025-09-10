import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { createPinia } from 'pinia'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
app.use(ArcoVue)
app.use(pinia)
app.use(router)
app.mount('#app')
