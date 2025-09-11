// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
// ====================================================\\HOME//=====================================================
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../pages/Home.vue')
        },
// ====================================================\\EXO//=====================================================
        {
            path: '/exo',
            alias: '/exo',
            name: 'exo',
            component: () => import('../pages/exo/exo1.vue')
        },
        {
            path: '/exo2',
            alias: '/exo2',
            name: 'exo2',
            component: () => import('../pages/exo/exo2.vue')
        },
        {
            path: '/exo3',
            alias: '/exo3',
            name: 'exo3',
            component: () => import('../pages/exo/exo3.vue')
        },
        {
            path: '/exo4',
            alias: '/exo4',
            name: 'exo4',
            component: () => import('../pages/exo/exo4.vue')
        },
        {
            path: '/exo5',
            name: 'exo5',
            component: () => import('../pages/exo/exo5.vue')
        },
        {
            path: '/exo6',
            name: 'exo6',
            component: () => import('../pages/exo/exo6.vue')
        },
        {
            path: '/exo6v2',
            name: 'exo6v2',
            component: () => import('../pages/exo/exo6v2.vue')
        },
        {
            path: '/exo6v3',
            name: 'exo6v3',
            component: () => import('../pages/exo/exo6v3.vue')
        },
        {
            path: '/exo7',
            name: 'exo7',
            component: () => import('../pages/exo/exo7.vue')
        },
// ====================================================\\LESSONS//=====================================================
        {
            path: '/lesson1',
            name: '/lesson1',
            component: () => import('../pages/lessons/text-interpolation.vue')
        },
        {
            path: '/lesson2',
            name: '/lesson2',
            component: () => import('../pages/lessons/attribute-binding.vue')
        },
        {
            path: '/lesson3',
            name: '/lesson3',
            component: () => import('../pages/lessons/event-binding.vue')
        },
        {
            path: '/lesson4',
            name: '/lesson4',
            component: () => import('../pages/lessons/two-way-binding.vue')
        },
        {
            path: '/lesson5',
            name: '/lesson5',
            component: () => import('../pages/lessons/computed-properties.vue')
        },
        {
            path: '/lesson6',
            name: '/lesson6',
            component: () => import('../pages/lessons/watchers.vue')
        },
        {
            path: '/lesson7',
            name: '/lesson7',
            component: () => import('../pages/lessons/dynamic-styling.vue')
        },
        {
            path: '/lesson8',
            name: '/lesson8',
            component: () => import('../pages/lessons/dynamic-styling-ts.vue')
        },
        {
            path: '/lesson9',
            name: '/lesson9',
            component: () => import('../pages/lessons/conditional-rendering.vue')
        },
// ====================================================\\TP/=====================================================
        {
            path: '/tp',
            name: 'tp',
            component: () => import('../pages/TP/tp1.vue')
        },
        {
            path: '/tp2',
            name: 'tp2',
            component: () => import('../pages/TP/tp2.vue')
        },
        {
            path: '/tp3',
            name: 'tp3',
            component: () => import('../pages/TP/tp3.vue')
        },
// ====================================================\\GAUFRE CLICKER/=====================================================
        {
            path: '/simple-click',
            name: '/simple-click',
            component: () => import('../pages/gaufre clicker/simple-compteur.vue')
        },
// ====================================================\\ABOUT//=====================================================
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue')
        },
// ====================================================\\ERROR 404//=====================================================
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../pages/NotFoundView.vue')
        },
    ]
});

export default router;