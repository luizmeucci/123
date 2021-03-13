import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import PontosColeta from '../views/PontosColeta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PontosColeta',
    component: PontosColeta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
