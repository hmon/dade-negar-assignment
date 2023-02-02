import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "main-layout" */ '../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
