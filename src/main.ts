import { createApp } from 'vue'
import App from './App.vue'
// svg-icon
import 'virtual:svg-icons-register'

import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'
import '@assets/style/cover-element.less'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

// css 入口
import '@/assets/style/index.css'
const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
