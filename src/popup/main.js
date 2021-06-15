//import { createApp } from 'vue'
import app from './components/app.vue'
import myVue from "@/utils/myVue.js"

const myApp = myVue(app)
myApp.mount('#app')
