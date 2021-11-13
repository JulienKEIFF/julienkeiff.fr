import { createApp } from 'vue'
import App from './App.vue'

import Unicon from 'vue-unicons';
import { uniGithubAlt, uniLinkH, uniDesktop  } from 'vue-unicons/dist/icons';
import './assets/tailwind.css'

Unicon.add([uniGithubAlt, uniLinkH, uniDesktop  ])
createApp(App).use(Unicon).mount('#app')