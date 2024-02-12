import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/HomeView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // You can keep duplicateNavigationPolicy if you need it, but make sure it's necessary for your use case.
});

export default router;