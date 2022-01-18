import { createApp } from 'vue'

import App from './components/App.vue'
import router from './routes'
import HelloWorld from './components/HelloWorld.vue'
const app = createApp(App)
import './index.css'
app.use(router)
createApp(App).mount('#app')
