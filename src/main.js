import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt'

// vue3 부터는 잘 안씀
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from './store.js'


app.use(store).mount('#app')
