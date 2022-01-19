import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
//import HelloWorld from './HelloWorld.vue'
const app = createApp(App)
import './index.css'
app.use(router)
app.mount('#app')
