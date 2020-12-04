import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import textFilter from "./modules/index"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp, faTv, faCogs, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faGithub, faLinkedin, faAngleDown, faAngleUp, faTv, faCogs, faGlobe])


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(textFilter)
Vue.component('icon', FontAwesomeIcon)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
