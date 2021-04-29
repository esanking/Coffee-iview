import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/view/HomeNavbar.vue'),
      children: [{
        name: 'home',
        path: '',
        component: () => import('@/view/Home.vue'),
      },
      {
        name: 'Order',
        path: '/Order',
        component: () => import('@/view/Order.vue'),
      },
      {
        name: 'OrderList',
        path: '/OrderList',
        component: () => import('@/view/OrderList.vue'),
      },
      ],
    },
  ],
});
