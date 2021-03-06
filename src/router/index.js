import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import informacoes from '../views/informacoes.vue'
import PontosColeta from '../views/PontosColeta.vue'
import Compostagem from '../views/compostagem.vue'

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
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
  },
  {
    path: '/compostagem',
    name: 'compostagem',
    component: Compostagem
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router