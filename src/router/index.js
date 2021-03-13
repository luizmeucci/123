import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
    
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
