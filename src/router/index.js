import Vue from 'vue'
import VueRouter from 'vue-router'

import Document from './../views/Document.vue'
import Home from './../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/document',
    name: 'documents',
    component: Document
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
