import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { Home, PlanCreator } from '../views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plan-creator',
    name: 'PlanCreator',
    // todo lazy loading with /* webpackChunkName: "plan-creator" */
    component: PlanCreator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
