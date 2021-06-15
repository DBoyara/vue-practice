import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'globalFeed',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed.vue'),
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
    {
        path: '/feed',
        name: 'yourFeed',
        component: () => import(/* webpackChunkName: "about" */ '../views/YourFeed.vue'),
    },
    {
        path: '/tags/:slug',
        name: 'tag',
        component: () => import(/* webpackChunkName: "about" */ '../views/TagFeed.vue'),
    },
    {
        path: '/articles/new',
        name: 'createArticle',
        component: () => import(/* webpackChunkName: "about" */ '../views/CreateArticle.vue'),
    },
    {
        path: '/articles/:slug',
        name: 'article',
        component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue'),
    },
    {
        path: '/articles/:slug/edit',
        name: 'editArticle',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditArticle.vue'),
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    },
    {
        path: '/profiles/:slug',
        name: 'userProfile',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue'),
    },
    {
        path: '/profiles/:slug/favorites',
        name: 'userProfileFavorites',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
