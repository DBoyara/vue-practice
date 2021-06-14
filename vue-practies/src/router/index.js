import { createRouter, createWebHashHistory } from 'vue-router';
import GlobalFeed from '../views/GlobalFeed.vue';

const routes = [
    {
        path: '/',
        name: 'globalFeed',
        component: GlobalFeed,
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
