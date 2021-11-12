import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import map from '../views/dmap.vue'
import board from '../views/board.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    component:()=>import('../App.vue'),
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/dmap',
        name: 'dmap',
        component: map
      },
      {
        path: '/board',
        name: 'board',
        component: board
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
