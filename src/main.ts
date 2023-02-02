import 'reflect-metadata'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'windi.css'

import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { FaThumbsUp } from 'oh-vue-icons/icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

addIcons(FaThumbsUp)

dayjs.extend(relativeTime)

createApp(App)
  .use(store)
  .use(router)
  .component('v-icon', OhVueIcon)
  .mount('#app')
