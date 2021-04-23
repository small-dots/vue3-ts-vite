import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import App from './App.vue'
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router).use(store).mount('#app')
