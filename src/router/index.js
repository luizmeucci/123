import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import informacoes from '../views/informacoes.vue'
import PontosColeta from '../views/PontosColeta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/PontosColeta',
    name: 'PontosColeta',
    component: PontosColeta
  },
  {
    path: '/informacoes',
    name: 'informacoes',
    component: informacoes
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
