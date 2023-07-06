import { createApp } from 'vue'
import './assets/sass/styles.scss'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router);

app.mount('#app')
