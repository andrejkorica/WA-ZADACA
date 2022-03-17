import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cardDetail from '../views/cardDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:shaID',
    name: 'cardDetail',
    component: cardDetail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
