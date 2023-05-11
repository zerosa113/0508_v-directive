import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VBind from '../views/VBind.vue'
import Vfor from '../views/Vfor.vue'
import Props from '../views/Props.vue'
import Emit from '../views/Emit.vue'
import VShow from '../views/VShow.vue'
import RouterView from '../views/RouterView.vue'
import Model from '../views/Model.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      // component: () => import('../views/VBind.vue')
      component: Home
    },
    {
      path: '/v-bind',
      name: 'VBind',
      // component: () => import('../views/VBind.vue')
      component: VBind
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/v-for',
      name: 'Vfor',
      component: Vfor
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/emit',
      name: 'Emit',
      component: Emit
    },
    {
      path: '/v-show',
      name: 'VShow',
      component: VShow
    },
    {
      path: '/router-view',
      name: 'router-view',
      component: RouterView
    },
    {
      path: '/model',
      name: 'model',
      component: Model
    },

  ]
})

export default router
