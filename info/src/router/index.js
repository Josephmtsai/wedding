import Vue from 'vue'
import VueRouter from 'vue-router'
import WeddingInvite from '../views/WeddingInvite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WeddingInvite',
    component: WeddingInvite
  },
  {
    path: '/timeline',
    name: 'TimeLine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TimeLine" */ '../views/TimeLine.vue')
  },
  {
    path: '/maps',
    name: 'Maps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TimeLine" */ '../views/Maps.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
