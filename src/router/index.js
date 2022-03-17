import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/Inicio.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
