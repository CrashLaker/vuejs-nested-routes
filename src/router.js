import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nested',
      props: true,
      name: 'nested',
      component: () => import(/* webpackChunkName: "about" */ './views/Nested.vue'),
      children: [
        {
          name: 'nested1',
          path: 'nested1/:id?',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '@/components/Nested1.vue'),
        },
        {
          name: 'nested2',
          path: 'nested2/:id?',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '@/components/Nested2.vue'),
        },
        {
          name: 'nested3',
          path: 'nested3/:id?',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ '@/components/Nested3.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
