import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
const app = createApp(App)
import './index.css'
app.use(router)
app.mount('#app')
