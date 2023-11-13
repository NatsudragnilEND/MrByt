import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/pages/Contacts.vue')
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import('@/pages/Reviews.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/pages/Services.vue')
    },
    {
      path: '/services/wash',
      name: 'ServicesWash',
      component: () => import('@/pages/Podrobne.vue')
    },
    {
      path: '/services/dryer',
      name: 'ServicesDryer',
      component: () => import('@/pages/Podrobne2.vue')
    },
    {
      path: '/services/xolod',
      name: 'ServicesXolod',
      component: () => import('@/pages/Podrobne3.vue')
    }
  ]
})

export default router