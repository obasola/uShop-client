import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/discounts', component: () => import('pages/CouponPage.vue') },
      { path: '/lists', component: () => import('pages/ItemListPage.vue') },
      { path: '/stores', component: () => import('pages/StorePage.vue') },
      { path: '/users', component: () => import('pages/PersonPage.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
